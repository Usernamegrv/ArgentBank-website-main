import CardTransaction from "../../components/cardTransaction/CardTransaction.jsx";

import "./DashBoard.css";
import { getProfile } from "../../reducers/userSlice.js";
// import { updateProfile } from "../../reducers/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function DashBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const currentUser = useSelector(
    (state) => state.userReducer.currentUser.userName
  );
  console.log(currentUser);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <>{currentUser}</>
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
