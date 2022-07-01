import { Link } from "react-router-dom";
import classes from "./NavigateBar.module.css";

function NavigateBar() {
  return (
    <header className={classes.header}>
      <h1>Last Night Stock Info</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/all">All</Link>{" "}
          </li>
          <li>
            <Link to="/recent">Recent</Link>{" "}
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigateBar;
