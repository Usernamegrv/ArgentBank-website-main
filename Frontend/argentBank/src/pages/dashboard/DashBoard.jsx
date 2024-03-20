import CardTransaction from "../../components/cardTransaction/CardTransaction.jsx";

import { getProfile } from "../../reducers/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal.jsx";
import "./DashBoard.css";

function DashBoard() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const token = useSelector((state) => state.userReducer.token);

  const currentUser = useSelector(
    (state) => state.userReducer.currentUser.userName
  );
  console.log(currentUser);

  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, token, currentUser]);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="main bg-dark">
      <div className={`edit-section ${showModal ? "hidden" : ""}`}>
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
      <h2 className="sr-only">Accounts</h2>
      <section>
        <CardTransaction
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          content="Available Balance"
        />
        <CardTransaction
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          content="Available Balance"
        />
        <CardTransaction
          title="Argent Bank Credit Card (x8349)"
          amount="$184.60"
          content="Current Balance"
        />
      </section>
    </main>
  );
}

export default DashBoard;
