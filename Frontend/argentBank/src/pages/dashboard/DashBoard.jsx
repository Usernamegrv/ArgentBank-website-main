import CardTransaction from "../../components/cardTransaction/CardTransaction.jsx";

import { getProfile } from "../../reducers/userSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Modal from "../../components/modal/Modal.jsx";

import "./DashBoard.css";

function DashBoard() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const currentUser = useSelector(
    (state) => state.userReducer.currentUser.userName
  );
  console.log(currentUser);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <>{currentUser}</>
        </h1>
        <button className="edit-button" onClick={openModal}>
          Edit Name
        </button>
      </div>
      {showModal && <Modal closeModal={closeModal} />}
      <CardTransaction />
      <CardTransaction />
      <CardTransaction />
    </main>
  );
}

export default DashBoard;
