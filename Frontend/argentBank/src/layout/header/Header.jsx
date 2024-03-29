import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userSlice.js";

function Header() {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.userReducer.currentUser.userName
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  let activeStyle = {
    textDecoration: "underline",
    color: "#42b983",
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src="./argentBankLogo.webP" />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="main-nav-item">
          {isLoggedIn ? (
            <>
              <FontAwesomeIcon icon={faUserCircle} />
              <span>{currentUser}</span>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span onClick={handleLogout}>Sign Out</span>
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
  isLoggedIn: PropTypes.bool,
};

export default Header;
