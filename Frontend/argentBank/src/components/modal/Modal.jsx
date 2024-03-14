import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../reducers/userSlice.js";

const Modal = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(newUserName));
  };

  return (
    <div className="modal">
      <input
        type="text"
        value={newUserName}
        onChange={handleInputChange}
        placeholder="Enter new username"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Modal;
