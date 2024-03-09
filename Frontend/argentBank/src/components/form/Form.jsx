import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../../actions/post.action.js";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheckBox = (e) => {
    if (e.target.checked === true) {
      localStorage.setItem("remember", "true");
    } else {
      localStorage.setItem("remember", "false");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
    navigate("/DashBoard");
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
