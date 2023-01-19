import { useState } from "react";
import "./footerPayment.css";

const FooterPayment = ({ entredId, proPrice }) => {
  return (
    <div className="footer__payment">
      <div className="footer">
        <div className="footer__player__id__name">
          <span className="footer__player__id__title">PlayerID: </span>
          <span className="footer__palyer__name">baargeele </span>
          <span className="footer__player__id">(555555555555)</span>
        </div>

        <div className="footer__total__pay-btn">
          <div className="footer__total">
            <span className="footer__total__title">Total: </span>
            <span className="footer__total__money">{proPrice}$</span>
          </div>
          <button className={`footer__pay-btn ${entredId && "active"}`}>
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
