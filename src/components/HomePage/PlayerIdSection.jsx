import "./playerIdSection.css";

const PlayerIdSection = ({ entredId, setEnteredId }) => {
  return (
    <div className="home__player__id__verfy">
      <span className="home__title">Player ID Verification</span>
      <div className="home__player__id">
        <form
          className="home__form__control"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="home__player__id__input"
            type="text"
            placeholder="Enter Player ID"
          />
          <button
            className="home__player__submit__btn"
            onClick={() => {
              setEnteredId(!entredId);
            }}
          >
            {entredId ? "X" : "OK"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerIdSection;
