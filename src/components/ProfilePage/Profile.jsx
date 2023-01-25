import "./profile.css";
import profileImg from "../../../assets/images/profile-img.png";
import arrowImg from "../../../assets/images/arrow.png";
import ucImg from "../../../assets/images/first.png";
import Header from "../Header/Header";

const Profile = () => {
  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="profile__section">
        <div className="profile__user">
          <div className="profile__user__img">
            <img
              className="profile__image"
              src={profileImg}
              alt="profile-image"
            />
          </div>
          <div className="profile__name-gmail">
            <span className="profile__name">YOUSUF ABDI</span>
            <span className="profile__gmail">yufis0844@gmail.com</span>
          </div>
          <div className="profile__arrow">
            <img
              className="profile__arrow-img"
              src={arrowImg}
              alt="arrow-image"
            />
          </div>
        </div>

        <div className="profile__purchase__history">
          <h2 className="profile__title">Last Purchase</h2>
          <div className="profile__history__purchases">
            <div className="profile__history">
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
            <div className="profile__history">
              <div className="profile__date__uc">
                <span className="profile__date">2h ago</span>
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
            <div className="profile__history">
              <div className="profile__date__uc">
                <span className="profile__date">2h ago</span>
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
            <div className="profile__history">
              <div className="profile__date__uc">
                <span className="profile__date">2h ago</span>
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
    </>
  );
};

export default Profile;
