import Header from "../Header/Header";
import "./home.css";
import headerImg from "../../../assets/images/bannerImg.png";
import evcPlusImg from "../../../assets/images/evcplus.png";
import sahalImg from "../../../assets/images/sahal.png";
import jeebImg from "../../../assets/images/jeep.png";
import zaadImg from "../../../assets/images/zaad.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [isSelectedindex, setisSelectedindex] = useState(0)
  const onselect = (index) => setisSelectedindex(index)



  var payment=[
    {
      paymentName: "Evc Plus",
      paymentImage: evcPlusImg
    },
    {
      paymentName: "Sahal Service",
      paymentImage: sahalImg
    },
    {
      paymentName: "Jeeb",
      paymentImage: jeebImg
    },
    {
      paymentName: "ZAAD",
      paymentImage: zaadImg
    }
  ]


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
            {
              payment.map((data, index) => 
                <>
                <div className={`${isSelectedindex == index ? "payment__card__info selected" : "payment__card__info"}`} onClick={() => {onselect(index)}}>
                  <img
                  className="payment__card__img"
                  src={data.paymentImage}
                  alt="evc-img"
                  />
                  <span className="payment__card__name">{data.paymentName}</span>
                </div>
                </>
              )
            }
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
