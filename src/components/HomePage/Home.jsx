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
import axios from "axios";

const Home = () => {
  const [isSelectedindex, setisSelectedindex] = useState(0);
  const [isSelectedindexP, setisSelectedindexP] = useState(0);
  const onselect = (index) => setisSelectedindex(index);
  const [products, setproducts] = useState([]);
  const onselectP = (index) => setisSelectedindexP(index);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("https://baargeelle.com/flutterConn/get_service.php")
      .then((response) => setproducts(response.data));
  };

  function imgClass(img) {
    var imgcls = "";
    if (img == "first") {
      imgcls = "first_img";
    } else if (img == "second") {
      imgcls = "second_img";
    } else if (img == "normal") {
      imgcls = "normal_img";
    } else if (img == "big") {
      imgcls = "big_img";
    } else if (img == "biggest") {
      imgcls = "biggest_img";
    }
    return imgcls;
  }

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

  // const productActiveBgImg = {
  //   backgroundImage: `url(${cardActiveUcBg})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   height: "210px",
  //   width: "100%",
  // };

  // const productBgImg = {
  //   backgroundImage: `url(${cardUcBg})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   height: "210px",
  //   width: "100%",
  // };

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
            {products.map((product, index) => (
              <div
                className={`${
                  isSelectedindexP == index
                    ? "product_card_hight active"
                    : "product_card_hight"
                }`}
                onClick={() => {
                  onselectP(index);
                }}
              >
                <div
                  className={`${
                    isSelectedindexP == index
                      ? "product__card__info active"
                      : "product__card__info"
                  }`}
                  // style={
                  //   isSelectedindexP == index
                  //     ? productActiveBgImg
                  //     : productBgImg
                  // }
                >
                  <div className="product__amount__uc">
                    <img src={ThinUcImg} alt="thin-uc-img" />
                    <span>{product.UC}</span>
                  </div>
                  <div className="card_img">
                  <img
                    className={imgClass(product.image)}
                    src={"../../../assets/images/" + product.image + ".png"}
                    alt={product.image}
                  />
                  </div>
                  <p className="product__price__uc">{product.Price}$</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
