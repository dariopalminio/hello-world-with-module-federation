import { useContext } from "react";
import UserContext from "app1/UserContext"; //Context from micro app1
import AppOne from "app1/AppOne"; //Component from micro app1
import AppTwo from "app2/AppTwo"; //Component from micro app2
import ContextProvider from "./ContextProvider";


/**
 * Main App
 * Container of Micro-Frontends
 */
function App() {
  const { user } = useContext(UserContext); //Context from micro app1

  return (
    <ContextProvider>
      <div>
        <h1>Micro Frontends with Module Federation, React and Typescript</h1>
        Hello {user}, obtained from app1, in Container App.
        <AppOne />
        <AppTwo />
      </div>
    </ContextProvider>
  );
}

export default App;
