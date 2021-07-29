import { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import SalutePage from "./SalutePage";
import OtherPage from "./OtherPage";

const Content: FunctionComponent = () => {
    return (
      <div id="MainContainer" data-testid="MainContainer" className="MainContainer">
        <Switch>
          <Route path="/" component={SalutePage} exact></Route>
          <Route path="/other" component={OtherPage} exact></Route>
        </Switch>
      </div>
    );
  };
  
  export default Content;