import Header from "../Header/Header";
import UserSection from "./UserSection";
import PurchaseSection from "./PurchaseSection";

const Profile = () => {
  return (
    <>
      <nav className="navbar">
        <Header />
      </nav>
      <div className="profile__section">
        <UserSection />
        <PurchaseSection />
      </div>
    </>
  );
};

export default Profile;
