//import { FC, useState } from "react";
import { createContext } from 'react';

export interface IUserContext {
    user: string
  };

//Context<IUserContext>
const UserContext = createContext<IUserContext>({user: 'Michael Jackson'});

export default UserContext;