import { Link } from "react-router-dom";

const TransactionHeader = () => {
  return (
    <div className="transaction__header">
      <div className="transaction__banner">
        <Link to="/" className="transaction__logo">
          Baargeele
        </Link>
        <span className="transaction__name">YOUSUF</span>
      </div>
      <div className="transaction__border"></div>
      <div className="transaction__title">
        <p className="transaction__sub__title">Your Payment Are Save</p>
        <span className="transaction__payment">Payment</span>
      </div>
    </div>
  );
};

export default TransactionHeader;
