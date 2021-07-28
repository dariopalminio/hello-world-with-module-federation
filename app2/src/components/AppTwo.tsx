import React, { useEffect, useState, useContext } from "react";

const loadContextModule = async function () {
  //@ts-ignore
  return await import("app1/UserContext").then(({ default: UserContext }) => {
    return UserContext;
  }).catch(error => {
    console.log("Can't Load !!!", error);
    throw error;
  });
};

/**
 * Component
 * @returns JSX.Element 
 */
const AppTwo: React.FC  = (): JSX.Element => {
  const [UserContext, setUserContext] = useState<React.Context<any>>(React.createContext({}));
  const [error, setError] = useState<Error|null>(null);
  const { user, setUser } = useContext(UserContext); //Context from micro app1

  useEffect(() => {
    //Dynamically load remote applications as components
    loadContextModule().then(setUserContext).catch(err => {
        console.log(err);
        setError(err);
      }
    );
}, [UserContext]);

function changeUser() {
  setUser("Vegeta");
}

  return (
    <div style={{border: '2px solid red'}}>
      Hello World from Micro App Two!
      <div>
      Hello user:{user} (obtained from app1) from Micro App Two!
      <button onClick={changeUser}>Change User to Vegeta</button>;
      </div>

    </div>
  );
};

export default AppTwo;