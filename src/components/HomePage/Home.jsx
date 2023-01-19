import Header from "../Header/Header";
import headerImg from "../../../assets/images/bannerImg.png";
import PlayerIdSection from "./PlayerIdSection";
import PaymentSection from "./PaymentSection";
import ProductSection from "./ProductSection";
import FooterPayment from "./FooterPayment";

const Home = () => {
  return (
    <>
      <Header />
      <img className="home__bg__img" src={headerImg} alt="headerImg" />
      <div className="home__container">
        <PlayerIdSection />
        <PaymentSection />
        <ProductSection />
        <FooterPayment />
      </div>
    </>
  );
};

export default Home;
