import "./purchase-history.css";
import ucImg from "../../../../assets/images/first.png";

const PurchaseHistory = ({ clickUserHead }) => {
  return (
    <div className="wrapper">
      <div className={`${clickUserHead ? "hide" : "purchase__history__sec"}`}>
        <span className="purchase__history__title">Last Purchase</span>
        <div className="purchase__history__card__wrapper">
          <div className="purchase__history__card">
            <div className="profile__date__uc">
              <span className="profile__date">
                <p>2h ago</p>
              </span>
              <img className="profile__uc__img" src={ucImg} alt="uc-image" />
            </div>
            <div className="profile__name__id">
              <span className="profile__player__name">NH-YUUSIF</span>
              <span className="profile__player__id">5173322102</span>
            </div>
            <div className="profile__money__uc">
              <span className="profile__money">109$</span>
              <span className="profile__uc">8400UC</span>
            </div>
          </div>

          <div className="purchase__history__card">
            <div className="profile__date__uc">
              <span className="profile__date">
                <p>2h ago</p>
              </span>
              <img className="profile__uc__img" src={ucImg} alt="uc-image" />
            </div>
            <div className="profile__name__id">
              <span className="profile__player__name">NH-YUUSIF</span>
              <span className="profile__player__id">5173322102</span>
            </div>
            <div className="profile__money__uc">
              <span className="profile__money">109$</span>
              <span className="profile__uc">8400UC</span>
            </div>
          </div>

          <div className="purchase__history__card">
            <div className="profile__date__uc">
              <span className="profile__date">
                <p>2h ago</p>
              </span>
              <img className="profile__uc__img" src={ucImg} alt="uc-image" />
            </div>
            <div className="profile__name__id">
              <span className="profile__player__name">NH-YUUSIF</span>
              <span className="profile__player__id">5173322102</span>
            </div>
            <div className="profile__money__uc">
              <span className="profile__money">109$</span>
              <span className="profile__uc">8400UC</span>
            </div>
          </div>

          <div className="purchase__history__card">
            <div className="profile__date__uc">
              <span className="profile__date">
                <p>2h ago</p>
              </span>
              <img className="profile__uc__img" src={ucImg} alt="uc-image" />
            </div>
            <div className="profile__name__id">
              <span className="profile__player__name">NH-YUUSIF</span>
              <span className="profile__player__id">5173322102</span>
            </div>
            <div className="profile__money__uc">
              <span className="profile__money">109$</span>
              <span className="profile__uc">8400UC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
