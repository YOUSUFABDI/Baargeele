import "./TransactionHeader/transaction-header.css";
import "./transaction__section.css";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import OderInformation from "./OderInformation/OderInformation";
import UserInfo from "./UserInformation/UserInfo";
import TransactionFooter from "./TransactionFooter/TransactionFooter";
import EwalletImg from "../../../assets/images/E-Wallet.svg";
import Model from "./model/model";
import { useState } from "react";

const TransactionPayment = () => {
  const[openModel, setOpenModel] = useState(false);
  
  return (
    <div className="transaction__section">
      <TransactionHeader />
      {openModel && <Model setCloseModel = {setOpenModel} />}
      <div className="total_desk_tran">
        <div className="desk_user_info">
          <div className="total_user_info">
            <div className="title_user">
              <h2>User Information</h2>
            </div>
            <div className="box_user">
              <div className="img_user_info">
                <img
                  className="transaction__e__waller__img"
                  src={EwalletImg}
                  alt="ewalet-img"
                />
              </div>
              <div className="user_info">
                <UserInfo />
              </div>
            </div>
          </div>
          <TransactionFooter setOpenModel = {setOpenModel}/>
        </div>
        <div className="desk_order_info">
          <div className="total_order_info">
            <div className="title_order">
              <h2>Order Information</h2>
            </div>
            <div className="box_order">
            <OderInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPayment;
