import Header from "../Header/Header";
import "./download.css";
import bannerImage from "../../../assets/images/hero-banner.png";

const Download = () => {
  return (
    <>
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
              <a href="https://baargeelle.com/app/Baargeelle.apk">
                AVAILABLE NOW
              </a>
            </button>
          </div>

          <div className="download__image">
            <img
              className="download__banner-img"
              src={bannerImage}
              alt="baner-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
