import { useEffect, useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import PlayerIdSection from "./PlayerIdSection/PlayerIdSection";
import PaymentSection from "./PaymentSection/PaymentSection";
import ProductSection from "./ProductSection/ProductSection";
import FooterPayment from "./FooterSection/FooterPayment";
import CheckInfo from "./CheckInfo/CheckInfo";
import axios from "axios";

const Home = () => {
  const [entredId, setEnteredId] = useState(false);
  const [products, setproducts] = useState([]);
  const [totalproduct, setTotalproduct] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState();
  let [user, setUser] = useState([]);

  let userGmail = localStorage.getItem("userGmail");

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("UserGmail", userGmail);
    axios
      .post("https://baargeelle.com/flutterConn/get_users.php",params)
      .then((response) => {
        setUser(response.data[0]);
      });
  })





  return (
    <div className="wrapper">
      <Header />
      <img
        className="home__bg__img"
        src={"https://baargeelle.com/images/cover_image_1.jpg"}
        alt="headerImg"
      />
      <div className="home__container">
        <PlayerIdSection setEnteredId={setEnteredId} entredId={entredId} />
        {entredId ? <CheckInfo setEnteredId={setEnteredId} /> : null}
        <PaymentSection setSelectedPayment={setSelectedPayment} />
        <ProductSection
          setproducts={setproducts}
          products={products}
          setTotalproduct={setTotalproduct}
        />
        <FooterPayment
          setEnteredId={setEnteredId}
          entredId={entredId}
          setproducts={setproducts}
          products={products}
          totalproduct={totalproduct}
          selectedPayment={selectedPayment}
          user={user}
        />
      </div>
    </div>
  );
};

export default Home;
