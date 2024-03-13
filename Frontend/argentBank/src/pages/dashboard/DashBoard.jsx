import CardTransaction from "../../components/cardTransaction/CardTransaction.jsx";

import "./DashBoard.css";
import { getProfile } from "../../reducers/userSlice.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function DashBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          UserName!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <CardTransaction />
      <CardTransaction />
      <CardTransaction />
    </main>
  );
}

export default DashBoard;
