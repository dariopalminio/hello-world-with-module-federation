import { FC, useState, useContext } from "react";
import UserContext from "app1/UserContext"; //Context from micro app1
import AppTwo from "app2/AppTwo"; //Component from micro app2

/**
 * Provider for Context
 */
export const ContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

/**
 * Main App
 */
function App() {
  const { user } = useContext(UserContext); //Context from micro app1

  return (
    <ContextProvider>
      <div>
        <h1>Micro Frontends with Module Federation, React and Typescript</h1>
        Hello {user}, obtained from app1, in Container App.
        <AppTwo />
      </div>
    </ContextProvider>
  );
}

export default App;
