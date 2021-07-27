//import { FC, useState } from "react";
import { createContext } from 'react';
import IUserContext from "./IUserContext"; 
import { atom } from "jotai";


export const DefaultUserContextValue: IUserContext = {user: 'Michael Jackson', setUser: () => { },};

export const UserAtom = atom(DefaultUserContextValue.user);

//Context<IUserContext>
const UserContext = createContext<IUserContext>(DefaultUserContextValue);

export default UserContext;