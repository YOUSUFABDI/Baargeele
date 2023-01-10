import Header from "./Header";
import headerImg from "../../assets/images/bannerImg.png";
import evcPlusImg from "../../assets/images/evcplus.png";
import sahalImg from "../../assets/images/sahal.png";
import jeebImg from "../../assets/images/jeep.png";
import zaadImg from "../../assets/images/zaad.png";

const Home = () => {
  return (
    <>
      <Header />
      <img className="home__bg__img" src={headerImg} alt="headerImg" />
      <div className="home__container">
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

        <div className="home__payment__container">
          <span className="payment__title">Payment Method</span>
          <div className="payment__cards">
            <div className="payment__card__info selected">
              <img
                className="payment__card__img"
                src={evcPlusImg}
                alt="evc-img"
              />
              <span className="payment__card__name">Evc Plus</span>
            </div>
            <div className="payment__card__info">
              <img
                className="payment__card__img"
                src={sahalImg}
                alt="evc-img"
              />
              <span className="payment__card__name">Sahal Service</span>
            </div>
            <div className="payment__card__info">
              <img className="payment__card__img" src={jeebImg} alt="evc-img" />
              <span className="payment__card__name">Jeeb</span>
            </div>
            <div className="payment__card__info">
              <img className="payment__card__img" src={zaadImg} alt="evc-img" />
              <span className="payment__card__name">ZAAD</span>
            </div>
          </div>
        </div>

        <div className="product__container">
          <span className="product__title">Select Product</span>
        </div>
      </div>
    </>
  );
};

export default Home;
