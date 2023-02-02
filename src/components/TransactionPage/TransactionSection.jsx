import "./TransactionHeader/transaction-header.css";
import "./transaction__section.css";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import OderInformation from "./OderInformation/OderInformation";
import UserInfo from "./UserInformation/UserInfo";
import TransactionFooter from "./TransactionFooter/TransactionFooter";
import EwalletImg from "../../../assets/images/E-Wallet.svg";

const TransactionPayment = () => {
  return (
    <div className="transaction__section">
      <TransactionHeader />
      <div className="transaction__destop__wrapper">
        <div className="transaction__ds__head">
          <img
            className="transaction__e__waller__img"
            src={EwalletImg}
            alt="ewalet-img"
          />
          <div className="transaction__oder__user__info">
            <div className="transaction__oder">
              <OderInformation />
            </div>
            <UserInfo />
          </div>
        </div>
        <TransactionFooter />
      </div>
    </div>
  );
};

export default TransactionPayment;
