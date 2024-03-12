import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ isAuthenticated }) {
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
        <div className="main-nav-item">
          {isAuthenticated ? (
            <>
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Username</span>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Sign Out</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUserCircle} />
              <span>Sign In</span>
            </>
          )}
        </div>
      </NavLink>
    </nav>
  );
}
Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Header;
