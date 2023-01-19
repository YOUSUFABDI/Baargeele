import "./playerIdSection.css";

const PlayerIdSection = () => {
  return (
    <div className="home__player__id__verfy">
      <span className="home__title">Player ID Verification</span>
      <div className="home__player__id">
        <form className="home__form__control">
          <input
            className="home__player__id__input"
            type="text"
            placeholder="Enter Player ID"
          />
          <button className="home__player__submit__btn">Ok</button>
        </form>
      </div>
    </div>
  );
};

export default PlayerIdSection;
