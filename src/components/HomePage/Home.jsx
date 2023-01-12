import Header from "../Header/Header";
import "./home.css";
import headerImg from "../../../assets/images/bannerImg.png";
import evcPlusImg from "../../../assets/images/evcplus.png";
import sahalImg from "../../../assets/images/sahal.png";
import jeebImg from "../../../assets/images/jeep.png";
import zaadImg from "../../../assets/images/zaad.png";
import { useEffect, useState } from "react";
import ThinUcImg from "../../../assets/images/thinUcImg.png";
import SmallUcImg from "../../../assets/images/smallUcImg.png";
import cardUcBg from "../../../assets/images/card-uc-bg.png";
import cardActiveUcBg from "../../../assets/images/card-uc-active-bg.png";

const Home = () => {
  const [isSelectedindex, setisSelectedindex] = useState(0);
  const onselect = (index) => setisSelectedindex(index);

  var payment = [
    {
      paymentName: "Evc Plus",
      paymentImage: evcPlusImg,
    },
    {
      paymentName: "Sahal Service",
      paymentImage: sahalImg,
    },
    {
      paymentName: "Jeeb",
      paymentImage: jeebImg,
    },
    {
      paymentName: "ZAAD",
      paymentImage: zaadImg,
    },
  ];

  const productActiveBgImg = {
    backgroundImage: `url(${cardActiveUcBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "210px",
    width: "100%",
  };

  const productBgImg = {
    backgroundImage: `url(${cardUcBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "210px",
    width: "100%",
  };

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
            {payment.map((data, index) => (
              <>
                <div
                  className={`${
                    isSelectedindex == index
                      ? "payment__card__info selected"
                      : "payment__card__info"
                  }`}
                  onClick={() => {
                    onselect(index);
                  }}
                >
                  <img
                    className="payment__card__img"
                    src={data.paymentImage}
                    alt="evc-img"
                  />
                  <span className="payment__card__name">
                    {data.paymentName}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="product__container">
          <span className="product__title">Select Product</span>
          <div className="product__cards">
            <div
              className="product__card__info active"
              style={productActiveBgImg}
            >
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>32</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">0.75$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>63</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">1.3$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>198</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">1.85$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>261</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">5.3$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>324</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">6.75$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>690</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">12$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>1080</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">19$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>1875</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">29$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>4000</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">57$</p>
            </div>

            <div className="product__card__info" style={productBgImg}>
              <div className="product__amount__uc">
                <img src={ThinUcImg} alt="thin-uc-img" />
                <span>8400</span>
              </div>
              <img
                className="product__bg__small__img"
                src={SmallUcImg}
                alt="small-uc-img"
              />
              <p className="product__price__uc">109$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
