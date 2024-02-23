import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ isDashboard }) {
  let activeStyle = {
    textDecoration: "underline",
    color: "#42b983",
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img className="main-nav-logo-image" src="./argentBankLogo.png" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={faUserCircle} />
          <span>{isDashboard && <FontAwesomeIcon icon={faSignOutAlt} />}</span>

          <span>{isDashboard ? "Sign Out" : "Sign In"}</span>
        </div>
      </NavLink>
    </nav>
  );
}
Header.propTypes = {
  isDashboard: PropTypes.bool,
};

export default Header;
