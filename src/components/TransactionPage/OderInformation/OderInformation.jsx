import "./oder-info.css";
import ucImg from "../../../../assets/images/first.png";
import { useLocation } from "react-router-dom";

const OderInformation = () => {
  const location = useLocation();
  const playerid = location.state.playerid;
  const playername = location.state.playername;
  const totalproduct = location.state.totalproduct;
  return (
    <div className="oder__info__section">
      <h2 className="oder__info__title">Order Information</h2>
      <div className="oder__information__card">
        <div className="oder__info__banner">
          <div className="oder__img__oder__name">
            <div className="oder__img__bg">
              <img className="oder__img" src={ucImg} alt="us-img" />
            </div>
            <span className="oder__name">{totalproduct.UC} Unknown Cash</span>
          </div>
          <span className="oder__price">{totalproduct.Price}$</span>
          <div className="oder__banner__line"></div>
        </div>
        <div className="oder__player__info">
          <div className="oder__player__name">
            <span>PlayerName:</span>
            <span>{playername}</span>
          </div>
          <div className="oder__player__id">
            <span>PalyerID:</span>
            <span>{playerid}</span>
          </div>
          <div className="oder__player__line"></div>
        </div>
        <div className="oder__total">
          <span>Total:</span>
          <span>{totalproduct.Price}$</span>
        </div>
      </div>
    </div>
  );
};

export default OderInformation;
