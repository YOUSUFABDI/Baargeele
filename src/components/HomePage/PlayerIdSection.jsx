import "./playerIdSection.css";
import { useState } from "react";

const PlayerIdSection = () => {
  const [entredId, entredIdset] = useState(false)
  return (
    <div className="home__player__id__verfy">
      <span className="home__title">Player ID Verification</span>
      <div className="home__player__id">
        <form className="home__form__control" onSubmit={(e) => e.preventDefault()}>
          <input
            className="home__player__id__input"
            type="text"
            placeholder="Enter Player ID"
          />
          <button className="home__player__submit__btn" onClick={() => {entredIdset(!entredId)}}>{entredId ? "X" : "OK"}</button>
        </form>
      </div>
    </div>
  );
};

export default PlayerIdSection;
