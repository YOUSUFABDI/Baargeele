import "./user-sec.css";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const UserSec = ({ setClickUserHead, clickUserHead }) => {
  const handleHeadClick = () => {
    setClickUserHead(!clickUserHead);
  };

  const [user, setUser] = useState([]);
  const userGmail = localStorage.getItem("userGmail");
  let [isLoading, setIsloading] = useState(true);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  useEffect(() => {
    getUser()
  }, [])

  function getUser() {
    setIsloading(true)
    const params = new URLSearchParams();
    params.append("UserGmail", userGmail);
    axios
      .post("https://baargeelle.com/flutterConn/get_users.php", params)
      .then((response) => {
        setUser(response.data[0]);
      }).then(() => setIsloading((isLoading = false)));
  }

  return (
    <div className="wrapper">
      <div className="user__profile__head" onClick={handleHeadClick}>
        {isLoading ?
          <div className="Loading">
            <PuffLoader
              color="#B9D6F2"
              loading={isLoading}
              cssOverride={override}
              size={60}
            />
          </div> :
          <>
            <div className="user__icon__user__info">
              <FaUserCircle className="user__icon" />
              <div className="user__profile__name__gmail">
                <span>{isLoading ? "Loading" : capitalize(user.Name)}</span>
                <span>{user.Gmail}</span>
              </div>
            </div>
            <MdArrowForwardIos
              className={`${clickUserHead ? "active__icon" : "arrow__down__icon"}`}
            />
          </>
        }
      </div>
    </div>
  );
};

export default UserSec;
