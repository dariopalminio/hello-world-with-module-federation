//import { FC, useState } from "react";
import { createContext } from 'react';

export interface IUserContext {
    user: string
  };

const UserContext = createContext<IUserContext>({user: 'Michael Jackson'});

export default UserContext;