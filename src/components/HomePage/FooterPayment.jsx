import { useState } from "react";
import "./footerPayment.css";

const FooterPayment = () => {
  return (
    <div className="footer__payment">
      <div className="footer__player__id__name">
        <span className="footer__player__id__title">PlayerID: </span>
        <span className="footer__palyer__name">baargeele </span>
        <span className="footer__player__id">(555555555555)</span>
      </div>

      <div className="footer__total__pay-btn">
        <div className="footer__total">
          <span className="footer__total__title">Total: </span>
          <span className="footer__total__money">0.49 USD</span>
        </div>
        <button className="footer__pay-btn ">Pay now</button>
      </div>
    </div>
  );
};

export default FooterPayment;
