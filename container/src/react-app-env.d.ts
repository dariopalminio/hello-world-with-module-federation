/// <reference types="react-scripts" />
declare module "app1/context/IUserContext" {
    export default interface IUserContext {
        user: string;
    }
}
declare module "app1/context/UserContext" {
    import IUserContext from "app1/context/IUserContext";
    const UserContext: import("react").Context<IUserContext>;
    export default UserContext;
}
declare module "app1/context/UserContextProvider" {
    import { FunctionComponent } from "react";
    /**
     * Provider for Context
     */
    const UserContextProvider: FunctionComponent;
    export default UserContextProvider;
}
declare module "app1/components/AppOne" {
    import React from "react";
    /**
     * Component
     * @returns JSX.Element
     */
    const AppOne: React.FC;
    export default AppOne;
}
declare module "app2/AppTwo" {
    const AppTwo: () => JSX.Element;
    export default AppTwo;
}

