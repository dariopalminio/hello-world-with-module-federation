import React, { useContext } from "react";
import AppOne from "app1/AppOne";
import AppTwo from "app2/AppTwo";
import ContextProvider , { UserContext } from "./ContextProvider";


function App() {
  const { user } = useContext(UserContext);

  return (
    <ContextProvider>
      <div>
        Hello {user} ... I show you this app:
        <h1>Micro Frontends with Module Federation, React and Typescript</h1>
        Hello World from Container App.
        <AppOne />
        <AppTwo />
      </div>
    </ContextProvider>
  );
}

export default App;
