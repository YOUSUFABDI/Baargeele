import "./playerIdSection.css";
import { useState } from "react";
import { useLocalData } from "../../../DataContext";
import axios from "axios";

const PlayerIdSection = ({ entredId, setEnteredId }) => {
  const { inputValue, setInputValue, setPlayerName } = useLocalData();
  const [isInvalId, setIsinvalId] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  const handleOkBtn = (event) => {
    console.log(inputValue);
    const validPlayerId = new RegExp(/^[5]\d{4,11}$/);
    if (!validPlayerId.test(inputValue)) {
      setIsinvalId(true);
      console.log("Input is empty")
    } else {
      setIsinvalId(false);
      iDChecker(inputValue);
    }
  };

  function iDChecker(playerID) {
    setIsLoading((isLoading = true));
    const params = new URLSearchParams();
    params.append("PlayerID", playerID);
    axios
      .post("https://baargeelle.com/flutterConn/get_player_id.php", params)
      .then((response) => {
        var data = response.data;
        console.log(data)
        if (data == "Not Found") {
          setIsinvalId(true);
        } else {
          setPlayerName(data)
          setEnteredId(!entredId);
        }
      })
      .then(() => setIsLoading((isLoading = false)));
  }

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="home__player__id__verfy">
      <span className="home__title">Player ID Verification</span>
      <div className={`${entredId ? "hide__verify" : "home__player__id"}`}>
        <form
          className="home__form__control"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="home__player__id__input"
            type="text"
            value={inputValue}
            placeholder="Enter Player ID"
            onChange={handleOnchange}
          />
          <button className="home__player__submit__btn" onClick={() => {
            handleOkBtn()
          }}>
            {isLoading ? "X" : "OK"}
          </button>
        </form>
        {isInvalId && <p>Invalid Game ID</p>}
      </div>
    </div>
  );
};

export default PlayerIdSection;
