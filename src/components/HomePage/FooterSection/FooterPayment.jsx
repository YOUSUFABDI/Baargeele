import { useState } from "react";
import "./footerPayment.css";
import { useNavigate } from "react-router-dom";
import { useLocalData } from "../../../DataContext";

const FooterPayment = ({ entredId, proPrice }) => {
  const navigate = useNavigate();
  const { inputValue, playerName } = useLocalData();

  const goToTransaction = () => {
    navigate("/transaction");
  };

  return (
    <div className="footer__payment">
      <div className="footer">
        <div className={entredId ? "footer__player__id__name" : "footer_hide"}>
          <span className="footer__player__id__title">PlayerID: </span>
          <span className="footer__palyer__name">{playerName} </span>
          <span className="footer__player__id">({inputValue})</span>
        </div>

        <div className="footer__total__pay-btn">
          <div className="footer__total">
            <span className="footer__total__title">Total: </span>
            <span className="footer__total__money">{proPrice}$</span>
          </div>
          <button
            className={`footer__pay-btn ${entredId ? "active" : "inactive"}`}
            onClick={goToTransaction}
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
