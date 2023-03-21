import { Link, useLocation } from "react-router-dom";

const TransactionHeader = () => {
  const location = useLocation();
  const user = location.state.user;

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }


  return (
    <div className="transaction__header">
      <div className="transaction__banner">
        <Link to="/" className="transaction__logo">
          Baargeele
        </Link>
        <span className="transaction__name">{capitalize(user.Name)}</span>
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
