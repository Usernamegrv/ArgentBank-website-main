import CardTransaction from "../../components/cardTransaction/CardTransaction.jsx";

import "./DashBoard.css";

function DashBoard() {
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
