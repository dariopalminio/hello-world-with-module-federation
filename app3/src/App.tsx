import React from "react";
import AppTree from "./components/AppTree";
import { BrowserRouter as Router } from "react-router-dom";import Menu from "./components/Menu";


/**
 * Micro-Frontend app3
 * @returns JSX.Element
 */
function App() {
  return (
    <div>
      <Router>
        <Menu />
        <AppTree />
      </Router>
    </div>
  );
}

export default App;
