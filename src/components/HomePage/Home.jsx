import { useEffect, useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import PlayerIdSection from "./PlayerIdSection";
import PaymentSection from "./PaymentSection";
import ProductSection from "./ProductSection";
import FooterPayment from "./FooterPayment";

const Home = () => {
  const [entredId, setEnteredId] = useState(false);
  const [products, setproducts] = useState([]);
  const [proPrice, setProPrice] = useState();

  return (
    <div className="wrapper">
      <Header />
      <img
        className="home__bg__img"
        src={"https://baargeelle.com/images/cover_image_4.jpg"}
        alt="headerImg"
      />
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
    </div>
  );
};

export default Home;
