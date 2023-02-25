import "./footerPayment.css";
import { useNavigate } from "react-router-dom";
import { useLocalData } from "../../../DataContext";
import { toast } from "react-hot-toast";

const FooterPayment = ({ entredId, totalproduct, selectedPayment }) => {
  const navigate = useNavigate();
  const { inputValue, playerName } = useLocalData();

  const isLoginCheck = () => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
      goToTransaction();
    } else {
      toast.error("Login required")
      navigate("/sign")
    }
  }

  const goToTransaction = () => {
    console.log(localStorage.getItem("userGmail"))
    let playerID = "";
    let playerNewNAme = "";
    if (inputValue != "") {
      playerID = inputValue;
    }
    if (playerName != "") {
      playerNewNAme = playerName
    }
    console.log("pass " + playerNewNAme + " and " + playerID)
    const data = {
      playerid: playerID,
      playername: playerNewNAme,
      totalproduct: totalproduct,
      selectedPayment: selectedPayment,
    }
    navigate("/transaction", { state: data });
  };

  return (
    <div className="footer__payment">
      <div className="footer">
        <div className={entredId ? "footer__player__id__name" : "footer_hide"}>
          <span className="footer__player__id__title">PlayerID: </span>
          <span className="footer__palyer__name">{playerName} </span>
          <span className="footer__player__id">({inputValue})</span>
        </div>

        <div className="footer__total__pay-btn">
          <div className="footer__total">
            <span className="footer__total__title">Total: </span>
            <span className="footer__total__money">{totalproduct.Price}$</span>
          </div>
          <button
            className={`footer__pay-btn ${entredId ? "active" : "inactive"}`}
            onClick={isLoginCheck}
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
