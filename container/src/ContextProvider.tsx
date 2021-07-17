import { FC, useState } from "react";
import { createContext } from 'react';

export interface IUserContext {
    user: string
  };

export const UserContext = createContext<IUserContext>({user: 'Michael Jackson'});


const ContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider
      value={{user}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
