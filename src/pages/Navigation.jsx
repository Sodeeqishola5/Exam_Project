import { Outlet, NavLink } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <>
      <nav>
        <h1>Welcome to AltSchool</h1>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "white" } : { color: "red" }
              }
              to="/"
              className="navigate"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "white" } : { color: "red" }
              }
              to="/about"
              className="navigate"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "white" } : { color: "red" }
              }
              to="/errorboundary"
              className="navigate"
            >
              ErrorBoundary
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
