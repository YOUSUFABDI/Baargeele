import "./TransactionHeader/transaction-header.css";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import OderInformation from "./OderInformation/OderInformation";

const TransactionPayment = () => {
  return (
    <div className="transaction__section">
      <TransactionHeader />
      <OderInformation />
    </div>
  );
};

export default TransactionPayment;
