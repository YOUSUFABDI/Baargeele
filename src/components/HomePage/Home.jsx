import { useEffect, useState } from "react";
import Header from "../Header/Header";
import headerImg from "../../../assets/images/bannerImg.png";
import PlayerIdSection from "./PlayerIdSection";
import PaymentSection from "./PaymentSection";
import ProductSection from "./ProductSection";
import FooterPayment from "./FooterPayment";

const Home = () => {
  const [entredId, setEnteredId] = useState(false);
  const [products, setproducts] = useState([]);
  const [proPrice, setProPrice] = useState();

  return (
    <>
      <Header />
      <img className="home__bg__img" src={headerImg} alt="headerImg" />
      <div className="home__container">
        <PlayerIdSection setEnteredId={setEnteredId} entredId={entredId} />
        <PaymentSection />
        <ProductSection
          setproducts={setproducts}
          products={products}
          setProPrice={setProPrice}
        />
        <FooterPayment
          setEnteredId={setEnteredId}
          entredId={entredId}
          setproducts={setproducts}
          products={products}
          proPrice={proPrice}
        />
      </div>
    </>
  );
};

export default Home;
