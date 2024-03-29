import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../../reducers/userSlice.js";

import "./Modal.css";

import PropTypes from "prop-types";

const Modal = ({ closeModal }) => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(newUserName));
    closeModal();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  console.log(currentUser);

  const { userName, firstName, lastName } = currentUser;

  return (
    <div className="modal">
      <h2>Edit user info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="input-group">
            <label htmlFor="userName:">User name:</label>
            <input
              type="text"
              onChange={handleInputChange}
              placeholder={userName}
            />
          </div>
          <div className="input-group">
            <label htmlFor="firstName">First name:</label>
            <input
              className="input-disabled"
              type="text"
              placeholder={firstName}
              readOnly
              disabled
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last name:</label>
            <input
              className="input-disabled"
              type="text"
              placeholder={lastName}
              readOnly
              disabled
            />
          </div>
          <div className="modal-button-container">
            <button className="modal-button" type="submit">
              Save
            </button>
            <button className="modal-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
