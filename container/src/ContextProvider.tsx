import React , { useState } from "react";
import UserContext from "app1/UserContext"; //Context from micro app1


/**
 * Provider for Context
 */
const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
