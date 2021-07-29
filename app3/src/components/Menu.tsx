import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Menu: FunctionComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">hello page</Link>
        </li>
        <li>
          <Link to="/other">Other page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
