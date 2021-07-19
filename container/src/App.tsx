import React, { useContext, Suspense } from "react";
import {ErrorBoundary} from 'react-error-boundary';

//If do not use @pixability-ui/federated-types then suppress errors using ’//@ts-ignore’ comments
//A ’//@ts-ignore’ comment suppresses all errors that originate on the following line.
import UserContext from "app1/UserContext"; //Context from micro app1

//Component from micro app1
//import AppOne from "app1/AppOne"; 
const AppOne = React.lazy(() => import("app1/AppOne"));

//Component from micro app2
//import AppTwo from "app2/AppTwo"; 
const AppTwo = React.lazy(() => import("app2/AppTwo"));

import ContextProvider from "./ContextProvider";


/**
 * Main App
 * Container of Micro-Frontends
 */
function App() {
  const { user } = useContext(UserContext); //Context from micro app1

  function ErrorFallback(e: {error: any, resetErrorBoundary: any}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{e.error.message}</pre>
      </div>
    )
  }

  const myErrorHandler = (error: Error, info: {componentStack: string}) => {
    // Do something with the error
    // E.g. log to an error logging client here
  }

  return (
    <ContextProvider>
      <div>
        <h1>Micro Frontends with Module Federation, React and Typescript</h1>
        Hello {user}, obtained from app1, in Container App.
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppOne />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppTwo />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ContextProvider>
  );
}

export default App;
