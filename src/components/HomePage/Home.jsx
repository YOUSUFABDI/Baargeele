import { useEffect, useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import PlayerIdSection from "./PlayerIdSection/PlayerIdSection";
import PaymentSection from "./PaymentSection/PaymentSection";
import ProductSection from "./ProductSection/ProductSection";
import FooterPayment from "./FooterSection/FooterPayment";
import CheckInfo from "./CheckInfo/CheckInfo";

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
        {entredId ? <CheckInfo setEnteredId={setEnteredId} /> : null}
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
