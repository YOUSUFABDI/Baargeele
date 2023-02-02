import "./user__info.css";
import evcPlusImg from "../../../../assets/images/evcplus.png";

const UserInfo = () => {
  return (
    <div className="user__info__section">
      <h2 className="user__info__title">User Information</h2>
      <div className="user__info__card">
        <div className="user__info__name__gmail">
          <div className="user__info__name">
            <span>Name:</span>
            <span>Yuusuf</span>
          </div>
          <div className="user__info__gmail">
            <span>Gmail:</span>
            <span>Yufis0488@gmail.com</span>
          </div>
          <div className="user__info__line"></div>
        </div>
        <div className="user__info__pay__method">
          <h2 className="user__info__pay__title">Payment Method</h2>
          <div className="user__info__pay__input__card">
            <img
              className="user__info__pay__img"
              src={evcPlusImg}
              alt="evc-img"
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
