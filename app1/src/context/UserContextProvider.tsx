import { useState, FunctionComponent } from "react";
import { useAtom } from "jotai";
import UserContext, { UserAtom } from "./UserContext";  



/**
 * Provider for Context
 */
const UserContextProvider: FunctionComponent = ({ children }) => {
  //const [user, setUser] = useState(DefaultUserContextValue.user);
  const [user, setUser] = useAtom(UserAtom);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;