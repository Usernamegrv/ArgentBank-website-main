import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../../redux/utils/apiCalls.js";
import { getUserProfil } from "../../redux/utils/apiCalls.js";
import {
  getEmail,
  getPassword,
  login,
  getFirstName,
  getLastName,
} from "../../redux/actions.js";
import { useNavigate } from "react-router-dom";

import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const password = useSelector((state) => state.password);
  const email = useSelector((state) => state.email);

  const handleCheckBox = (e) => {
    if (e.target.checked === true) {
      localStorage.setItem("remember", "true");
    } else {
      localStorage.setItem("remember", "false");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postFormData(email, password);

    if (response !== "error") {
      const token = localStorage.getItem("token");
      const userProfile = await getUserProfil(token);
      if (userProfile !== "not found") {
        dispatch(login());
        dispatch(getFirstName(userProfile.firstName));
        dispatch(getLastName(userProfile.lastName));
        navigate("/DashBoard");
      }
    }
    // dispatch(clearForm())
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
            onChange={(e) => dispatch(getEmail(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              dispatch(getPassword(e.target.value));
            }}
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
