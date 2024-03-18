import { useState } from "react";
import "./Form.css";

// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { login } from "../../reducers/userSlice.js";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  // const [isLoading, setisLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // setisLoading(true);

    dispatch(login({ email, password })).then((response) => {
      if (response.payload) {
        navigate(`/dashboard`);
      } else {
        setError("Invalid email or password.");
      }
      // setisLoading(false);
    });
  };

  return (
    <div className="sign-in-content">
      {/* {isLoading && <div className="loading"></div>} */}
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>
      <p>{Error}</p>
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
          <input type="checkbox" id="remember-me" />
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
