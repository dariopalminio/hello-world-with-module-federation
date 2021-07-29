import React, { Suspense } from "react";
import AppTwo from "./components/AppTwo";
import { ErrorBoundary } from "react-error-boundary";

// Import remote context
// @ts-ignore
const UserContextProvider = React.lazy(() => import("app1/UserContextProvider"));

/**
 * Micro-Frontend app2
 * @returns JSX.Element
 */
function App() {
  //Component Catch: Response in case of error
  function errorFallback(e: { error: any; resetErrorBoundary: any }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{e.error.message}</pre>
      </div>
    );
  }

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log("error:", error);
    console.log("info:", info);
  };

  return (
    <div>
      <ErrorBoundary
          FallbackComponent={errorFallback}
          onError={myErrorHandler}
        >
        <Suspense fallback={<div>Loading...</div>}>
          <UserContextProvider>

            <ErrorBoundary
            FallbackComponent={errorFallback}
            onError={myErrorHandler}
            >
            <Suspense fallback={<div>Loading...</div>}>
              <AppTwo />
            </Suspense>
          </ErrorBoundary>

          </UserContextProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
