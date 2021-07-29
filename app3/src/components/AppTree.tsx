import React from "react";
import Content from "./Content";


/**
 * Component
 * @returns JSX.Element 
 */
const AppTree: React.FC  = (): JSX.Element => {

  return (

    <div style={{border: '2px solid green', padding: '1em'}}>
      <Content />
    </div>
  );
};

export default AppTree;