import "./playerIdSection.css";
import { useState } from "react";
import { useLocalData } from "../../../DataContext";

const PlayerIdSection = ({ entredId, setEnteredId }) => {
  const { inputValue, setInputValue } = useLocalData();

  const handleOkBtn = (event) => {
    setEnteredId(!entredId);
  };

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
          <button className="home__player__submit__btn" onClick={handleOkBtn}>
            {entredId ? "X" : "OK"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerIdSection;
