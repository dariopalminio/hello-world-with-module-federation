import React, { FunctionComponent, useContext, useState, useEffect } from "react";

//If do not use @pixability-ui/federated-types then suppress errors using ’//@ts-ignore’ comments
//A ’//@ts-ignore’ comment suppresses all errors that originate on the following line.
//@ts-ignore
//import UserContext from "app1/UserContext"; //Context from micro app1

export const loadContextModule = async function () {
    //@ts-ignore
    return await import("app1/UserContext").then(({ default: UserContext }) => {
      return UserContext;
    }).catch(error => {
      console.log("Can't Load !!!", error);
      throw Error("Can't Load !!!");
    });
  }

 const ShowMessage: FunctionComponent = () => {
    const [UserContext, setUserContext] = useState<React.Context<any>>(React.createContext({}));
    const { user, setUser } = useContext(UserContext); //Context from micro app1

    useEffect(() => {
        //Dynamically load remote applications as components
        loadContextModule().then(setUserContext).catch(err => {
            console.log("Exceptiooooon!!!");
          }
        );
    }, [UserContext]);
      
    function changeUser() {
        setUser("Goku");
    }

    return (
      <div>
      Hello {user}, obtained from app1, in Container App.;
      <button onClick={changeUser}>Change User to Goku</button>;
      </div>
    )};
  
  export default ShowMessage;
