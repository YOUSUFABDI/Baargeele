import "./transaction__footer.css";

const TransactionFooter = ({setOpenModel}) => {
  return (
    <div className="transaction__footer__section">
      <h2 className="transaction__footer__title">
        Your proof of purchase will be sent to your e-mail.
      </h2>
      <button className="transaction__pay__btn" onClick={() => setOpenModel(true)} >Pay Now</button>
    </div>
  );
};

export default TransactionFooter;
