import React, { useContext } from "react";
//import { UserContext } from "container/ContextProvider";

/**
 * Component
 * @returns JSX.Element 
 */
const AppOne: React.FC = (): JSX.Element => {

  //const { user } = useContext(UserContext);

  return (
    <div style={{border: '2px solid blue'}}>
      Hello World from Micro App One!
    </div>
  );
};

export default AppOne;