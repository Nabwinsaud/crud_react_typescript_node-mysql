import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "normal link")}
        >
          <span>MERN</span>
        </NavLink>
        <div>
          <ul>
            <li>
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  isActive ? "active" : "normal link"
                }
              >
                Add
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
