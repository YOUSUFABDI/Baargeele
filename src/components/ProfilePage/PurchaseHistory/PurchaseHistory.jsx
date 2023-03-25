import "./purchase-history.css";
// import ucImg from "baargeelle.com/images/first.png";
import { useEffect, useState } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const PurchaseHistory = ({ clickUserHead }) => {

  const [userHistory, setUserHistory] = useState([]);
  const userGmail = localStorage.getItem("userGmail");
  let [isLoading, setIsloading] = useState(true);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  useEffect(() => {
    getUserHistory()
  }, [])

  function getUserHistory() {
    setIsloading(true)
    const params = new URLSearchParams();
    params.append("UserGmail", userGmail);
    axios
      .post("https://baargeelle.com/flutterConn/get_history.php", params)
      .then((response) => {
        setUserHistory(response.data);
      }).then(() => setIsloading((isLoading = false)));
  }


  return (
    <div className="wrapper">
      <div className={`${clickUserHead ? "hide" : "purchase__history__sec"}`}>
        <span className="purchase__history__title">Last Purchase</span>
        <div className="purchase__history__card__wrapper">
          {
            isLoading ?
              <div className="loading_purchase">
                <PuffLoader
                  color="#B9D6F2"
                  loading={isLoading}
                  cssOverride={override}
                  size={150}
                />
              </div>
              :
              (userHistory[0].ID == 0) ?
                <div className="no_history">
                  No History Yet
                </div>
                :
                <>
                  {userHistory.map((history) => (
                    <div className="purchase__history__card">
                      <div className="profile__date__uc">
                        <span className="profile__date">
                          <p>2h ago</p>
                        </span>
                        <img className="profile__uc__img" src={"https://baargeelle.com/images/first.png"} alt="uc-image" />
                      </div>
                      <div className="profile__name__id">
                        <span className="profile__player__name">{history.PlayerName}</span>
                        <span className="profile__player__id">{history.PlayerID}</span>
                      </div>
                      <div className="profile__money__uc">
                        <span className="profile__money">{history.Price}$</span>
                        <span className="profile__uc">{history.UC}<span>UC</span></span>
                      </div>
                    </div>
                  ))}
                </>
          }
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
