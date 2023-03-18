import "./playerIdSection.css";
import { useState } from "react";
import { useLocalData } from "../../../DataContext";
import axios from "axios";
import { PuffLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const PlayerIdSection = ({ entredId, setEnteredId }) => {
  const { inputValue, setInputValue, setPlayerName } = useLocalData();
  const [isInvalId, setIsinvalId] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  const handleOkBtn = (event) => {
    console.log("clicked ok btn");
    const validPlayerId = new RegExp(/^[5]\d{4,11}$/);
    if (!validPlayerId.test(inputValue)) {
      setIsinvalId(true);
      console.log("Input is empty");
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
        console.log(data);
        if (data == "Not Found") {
          setIsinvalId(true);
        } else {
          setPlayerName(data);
          setEnteredId(!entredId);
        }
      })
      .then(() => setIsLoading((isLoading = false)));
  }

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="home__player__id__verfy">
      <span className="home__title">Player ID Verification</span>
      <div className={`${entredId ? "hide__verify" : "home__player__id"}`}>
        <form className="home__form__control" onSubmit={handleSubmit}>
          <input
            className={`${
              isInvalId
                ? "home__player__id__input__error"
                : "home__player__id__input"
            }`}
            type="text"
            value={inputValue}
            placeholder="Enter Player ID"
            onChange={handleOnchange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="home__player__submit__btn"
            onClick={() => {
              handleOkBtn();
            }}
            style={isLoading ? { pointerEvents: "none" } : {}}
          >
            {isLoading ? (
              <PuffLoader
                color="#000"
                loading={isLoading}
                cssOverride={override}
                size={40}
              />
            ) : (
              "OK"
            )}
          </button>
        </form>
        {isInvalId && <p>Invalid Game ID</p>}
      </div>
    </div>
  );
};

export default PlayerIdSection;
