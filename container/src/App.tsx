import React, { useContext, useState, useEffect, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import IRemoteApp from "./remote/IRemoteApp";
import dynamicLoadRemoteApps from "./remote/dynamicLoadRemoteApps";

//If do not use @pixability-ui/federated-types then suppress errors using ’//@ts-ignore’ comments
//A ’//@ts-ignore’ comment suppresses all errors that originate on the following line.
import UserContext from "app1/UserContext"; //Context from micro app1

//Component from micro app1
//import AppOne from "app1/AppOne";
const AppOne = React.lazy(() => import("app1/AppOne"));

//Component from micro app2
//import AppTwo from "app2/AppTwo";
const AppTwo = React.lazy(() => import("app2/AppTwo"));
//const {default: AppTwo} = await import("app2/AppTwo");

import ContextProvider from "./ContextProvider";

//Remote Apps array
const remoteApps: IRemoteApp[] = [
  { scope: "app3", module: "./AppTree", url: "http://localhost:3003/app3.js" },
];

/**
 * fabecerra@stefanini.com
 * Main App
 * Container of Micro-Frontends
 */
function App() {
  const { user } = useContext(UserContext); //Context from micro app1
  const [remoteAppComponents, setRemoteAppComponents] = useState<any[]>([]);

  useEffect(() => {
    //Dynamically load remote applications as components
    dynamicLoadRemoteApps(remoteApps).then(setRemoteAppComponents);
  }, [remoteApps]);

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
  };

  return (
    <ContextProvider>
      <div>
        <h1>Micro Frontends with Module Federation, React and Typescript</h1>
        Hello {user}, obtained from app1, in Container App.

        <ErrorBoundary
          FallbackComponent={errorFallback}
          onError={myErrorHandler}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AppOne />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary
          FallbackComponent={errorFallback}
          onError={myErrorHandler}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AppTwo />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary
          FallbackComponent={errorFallback}
          onError={myErrorHandler}
        >
          <Suspense fallback="Loading content...">
            {remoteAppComponents[0]}
          </Suspense>
        </ErrorBoundary>
        
      </div>
    </ContextProvider>
  );
}

export default App;
