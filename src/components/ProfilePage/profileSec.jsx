import "./profile-sec.css";
import Header from "../Header/Header";
import UserSec from "./UserSection/UserSec";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";
import EditProfile from "./EditProfile/EditProfile";
import { useState } from "react";

const profileSec = () => {
  const [clickUserHead, setClickUserHead] = useState(false);

  return (
    <div className="wrapper">
      <nav className="navbar">
        <Header />
      </nav>

      <div className="profile__page">
        <div className="profile__page__head">
          <UserSec
            setClickUserHead={setClickUserHead}
            clickUserHead={clickUserHead}
          />

          <EditProfile clickUserHead={clickUserHead} />
        </div>
        <div className="profile__page__banner">
          <PurchaseHistory clickUserHead={clickUserHead} />
        </div>
      </div>
    </div>
  );
};

export default profileSec;
