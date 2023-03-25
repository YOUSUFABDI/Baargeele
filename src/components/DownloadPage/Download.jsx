import Header from "../Header/Header";
import "./download.css";
// import bannerImage from "baargeelle.com/images/hero-banner.png";
import { FcPhoneAndroid } from "react-icons/fc";

const Download = () => {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <Header />
      </nav>
      <div className="download__section">
        <div className="download__wrapper">
          <div className="download__content">
            <h2 className="download__title">PUBG MOBILE</h2>
            <h3 className="download__sub-title">
              Somali <span className="special">Pubg</span> Uc
            </h3>
            <p className="downlaod__desc">
              Ku Soo Dhawaaw Somali Pubg UC Waxaa Ka Iibsan Karta Dhaman
              Noocyada Pubg-UC-Ga Waxana Ku Iibsan Karta Qiimo Jaban Adigow
              Isticmalaya EVC-plus, ZAAD, Jeeb Iyo Sahal.
            </p>
            <button className="downlaod__btn">
              <a href="https://https://baargeelle.com/app/Baargeelle.apk">
                DOWNLOAD <FcPhoneAndroid />
              </a>
            </button>
          </div>

          <div className="download__image">
            <img
              className="download__banner-img"
              src={"https://baargeelle.com/images/hero-banner.png"}
              alt="baner-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
