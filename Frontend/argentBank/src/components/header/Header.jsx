import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img className="main-nav-logo-image" src="./argentBankLogo.png" />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <FontAwesomeIcon icon={faUserCircle} />
            <span>Sign In</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
