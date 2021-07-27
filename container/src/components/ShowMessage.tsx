import { FunctionComponent, useContext, useState } from "react";

//If do not use @pixability-ui/federated-types then suppress errors using ’//@ts-ignore’ comments
//A ’//@ts-ignore’ comment suppresses all errors that originate on the following line.
//@ts-ignore
import UserContext from "app1/UserContext"; //Context from micro app1

 const ShowMessage: FunctionComponent = () => {
    const { user, setUser } = useContext(UserContext); //Context from micro app1
    
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
