import { useLocation } from "react-router-dom";
import "./user__info.css";

const UserInfo = () => {
  const location = useLocation();
  const selectedPayment = location.state.selectedPayment;
  const user = location.state.user;
  
  const imgChecker = () => {
    const imgName = selectedPayment;
    return "../../../../assets/images/"+imgName+".png"
  }
  return (
    <div className="user__info__section">
      <h2 className="user__info__title">User Information</h2>
      <div className="user__info__card">
        <div className="user__info__name__gmail">
          <div className="user__info__name">
            <span>Name:</span>
            <span>{user.Name}</span>
          </div>
          <div className="user__info__gmail">
            <span>Gmail:</span>
            <span>{user.Gmail}</span>
          </div>
          <div className="user__info__line"></div>
        </div>
        <div className="user__info__pay__method">
          <h2 className="user__info__pay__title">Payment Method</h2>
          <div className="user__info__pay__input__card">
            <img
              className="user__info__pay__img"
              src={imgChecker()}
              alt="payment-img"
            />
            <div className="user__info__pay__line"></div>
            <input
              className="user__info__pay__input"
              type="text"
              placeholder="6xxxxxxx"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
