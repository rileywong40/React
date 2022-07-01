import { Link } from "react-router-dom";

function NavigateBar() {
  return (
    <header>
      <div>Last Night Stock Info</div>
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
