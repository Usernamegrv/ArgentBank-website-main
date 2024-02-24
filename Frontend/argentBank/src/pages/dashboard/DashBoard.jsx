import CardTransaction from "../../components/cardTransaction/CardTransaction.jsx";
import Footer from "../../layout/footer/Footer.jsx";
import Header from "../../layout/header/Header.jsx";
import "./DashBoard.css";

function DashBoard() {
  return (
    <div>
      <Header isDashboard={true} />
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
      <Footer />
    </div>
  );
}

export default DashBoard;
