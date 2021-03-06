import React, { useState, useEffect, Suspense } from "react";
import ShowMessage from "./components/ShowMessage";
import { ErrorBoundary } from "react-error-boundary";
import IRemoteApp from "./remote/IRemoteApp";
import dynamicLoadRemoteApps from "./remote/dynamicLoadRemoteApps";
import { BrowserRouter as Router } from "react-router-dom";
import diagram from "./images/diagram.png";

// @ts-ignore
//import UserContextProvider from "app1/UserContextProvider"; //Context from micro app1
// @ts-ignore
const UserContextProvider = React.lazy(() => import("app1/UserContextProvider"));

//Component from micro app1
//import AppOne from "app1/AppOne";
// @ts-ignore
const AppOne = React.lazy(() => import("app1/AppOne"));

//Component from micro app2
//import AppTwo from "app2/AppTwo";
const AppTwo = React.lazy(() => import("app2/AppTwo"));
//const {default: AppTwo} = await import("app2/AppTwo");

//Remote Apps array
const remoteApps: IRemoteApp[] = [
  { scope: "app3", module: "./AppTree", url: "http://localhost:3003/app3.js" },
  { scope: "app3", module: "./Menu", url: "http://localhost:3003/app3.js" },
];

/**
 * Main App
 * Container of Micro-Frontends
 */
function App() {
  const [remoteAppComponents, setRemoteAppComponents] = useState<JSX.Element[]>(
    []
  );

  useEffect(() => {
    //Dynamically load remote applications as components
    dynamicLoadRemoteApps(remoteApps).then(setRemoteAppComponents);
  }, [remoteApps]);

  //Component Catch: Response in case of error
  function errorFallback(e: { error: any; resetErrorBoundary: any }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{e.error.message}</pre>
      </div>
    );
  };

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log("error:", error);
    console.log("info:", info);
  };

  
  return (
    <div>
      <div style={{border: '2px solid grey', padding: '1em'}}>
      <h1>Hello World with Module Federation</h1>
      <h2>Micro Frontends with Module Federation, React and Typescript</h2>
      <div>Hello from Container App.;</div>
      <ErrorBoundary FallbackComponent={errorFallback} onError={myErrorHandler}>
        <Suspense fallback={<div>Loading...</div>}>
          <UserContextProvider>
            <div>
              Context from app2:
              <ErrorBoundary
                FallbackComponent={errorFallback}
                onError={myErrorHandler}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <ShowMessage />
                </Suspense>
              </ErrorBoundary>

              Content from app1:
              <ErrorBoundary
                FallbackComponent={errorFallback}
                onError={myErrorHandler}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <AppOne />
                </Suspense>
              </ErrorBoundary>

              Content from app2:
              <ErrorBoundary
                FallbackComponent={errorFallback}
                onError={myErrorHandler}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <AppTwo />
                </Suspense>
              </ErrorBoundary>

              <Router>
              Men?? from app3:
              <ErrorBoundary
                FallbackComponent={errorFallback}
                onError={myErrorHandler}
              >
                <Suspense fallback="Loading content...">
                  {remoteAppComponents[1]}
                </Suspense>
              </ErrorBoundary>
           
              Content from app3:
              <ErrorBoundary
                FallbackComponent={errorFallback}
                onError={myErrorHandler}
              >
                <Suspense fallback="Loading content...">
                  {remoteAppComponents[0]}
                </Suspense>
              </ErrorBoundary>
              </Router>

            </div>
          </UserContextProvider>
        </Suspense>
      </ErrorBoundary>
      </div>

      <div>
        <div>Architecture diagram:</div>
        <img src={String(diagram)} alt="diagram" style={{width:"60%", height:"60%"}}/>
      </div>

    </div>
  );
}

export default App;
