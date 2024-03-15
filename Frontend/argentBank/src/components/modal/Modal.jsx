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

  const currentUser = useSelector(
    (state) => state.userReducer.currentUser.userName
  );
  console.log(currentUser);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit user info</h2>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder={currentUser}
        />
        <input type="text" placeholder="First name" readOnly disabled />
        <input type="text" placeholder="Last name" readOnly disabled />
      </div>

      <div>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
