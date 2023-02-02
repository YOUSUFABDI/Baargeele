import "./oder-info.css";
import ucImg from "../../../../assets/images/first.png";

const OderInformation = () => {
  return (
    <div className="oder__info__section">
      <h2 className="oder__info__title">Order Information</h2>
      <div className="oder__information__card">
        <div className="oder__info__banner">
          <div className="oder__img__oder__name">
            <div className="oder__img__bg">
              <img className="oder__img" src={ucImg} alt="us-img" />
            </div>
            <span className="oder__name">32 Unknown Cash</span>
          </div>
          <span className="oder__price">0.75$</span>
          <div className="oder__banner__line"></div>
        </div>
        <div className="oder__player__info">
          <div className="oder__player__name">
            <span>PlayerName:</span>
            <span>NH-Yuusuf</span>
          </div>
          <div className="oder__player__id">
            <span>PalyerID:</span>
            <span>5172234428</span>
          </div>
          <div className="oder__player__line"></div>
        </div>
        <div className="oder__total">
          <span>Total:</span>
          <span>0.75$</span>
        </div>
      </div>
    </div>
  );
};

export default OderInformation;
