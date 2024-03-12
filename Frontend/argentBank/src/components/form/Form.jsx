import "./Form.css";

import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { loginUser } from "../../actions/post.action.js";
import { setEmail, setPassword } from "../../actions/user.action.js";

const Form = () => {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.userReducer.email);
  const password = useSelector((state) => state.userReducer.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const handleCheckBox = (e) => {
    if (e.target.checked === true) {
      localStorage.setItem("remember", "true");
    } else {
      localStorage.setItem("remember", "false");
    }
  };

  return (
    <div className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" onChange={handleCheckBox} />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;
