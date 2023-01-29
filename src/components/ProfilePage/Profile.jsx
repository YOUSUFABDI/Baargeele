import Header from "../Header/Header";
import UserSection from "./UserSection";
import PurchaseSection from "./PurchaseSection";
import MakeChange from "./MakeChange";

const Profile = () => {
  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="profile__section">
        <div className="user">
          <UserSection />
        </div>
        <div className="desktop__profile">
          <PurchaseSection />
          <div className="line"></div>
          <div className="make__change">
            <MakeChange />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
