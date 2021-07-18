import React, { useContext } from "react";
//import { UserContext } from "container/ContextProvider";

/**
 * Component
 * @returns JSX.Element 
 */
const AppOne: React.FC = () => {

  //const { user } = useContext(UserContext);

  return (
    <div>
      Hello World from Micro App One!
    </div>
  );
};

export default AppOne;