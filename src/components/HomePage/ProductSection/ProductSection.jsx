import { useEffect, useState } from "react";
import axios from "axios";
import "./productSection.css";
// import ThinUcImg from "baargeelle.com/images/thinUcImg.png";

const ProductSection = ({ setproducts, products, setTotalproduct }) => {
  const [isSelectedindexP, setisSelectedindexP] = useState(0);
  const onselectP = (index) => setisSelectedindexP(index);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("https://baargeelle.com/flutterConn/get_service.php")
      .then((response) => {
        setproducts(response.data);
        setTotalproduct(response.data[0]);
      });
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

  return (
    <div className="product__container">
      <span className="product__title">Select Product</span>
      <div className="product__cards">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${
              isSelectedindexP == index
                ? "product_card_hight active"
                : "product_card_hight"
            }`}
            onClick={() => {
              onselectP(index);
              setTotalproduct(product);
            }}
          >
            <div
              className={`${
                isSelectedindexP == index
                  ? "product__card__info active"
                  : "product__card__info"
              }`}
            >
              <div className="product__amount__uc">
                <img src={"https://baargeelle.com/images/thinUcImg.png"} alt="thin-uc-img" />
                <span>{product.UC}</span>
              </div>
              <div className="card_img">
                <img
                  className={imgClass(product.image)}
                  src={"https://baargeelle.com/images/" + product.image + ".png"}
                  alt={product.image}
                />
              </div>
              <p className="product__price__uc">{product.Price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
