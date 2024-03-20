import "./CardTransaction.css";
import PropTypes from "prop-types";

function CardTransaction({ title, amount, content }) {
  return (
    <>
      <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{content}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
    </>
  );
}

CardTransaction.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardTransaction;
