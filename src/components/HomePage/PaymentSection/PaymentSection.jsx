import "./paymentSection.css";
import { useEffect, useState } from "react";
// import evcPlusImg from "baargeelle.com/images/evcplus.png";
// import sahalImg from "baargeelle.com/images/sahal.png";
// import jeebImg from "baargeelle.com/images/jeep.png";
// import zaadImg from "baargeelle.com/images/zaad.png";

const PaymentSection = ({ setSelectedPayment }) => {
  const [isSelectedindex, setisSelectedindex] = useState(0);
  const onselect = (index) => setisSelectedindex(index);
  // setSelectedPayment("evcplus")

  var payment = [
    {
      paymentName: "Evc Plus",
      paymentID: "evcplus",
      paymentImage: "https://baargeelle.com/images/evcplus.png",
    },
    {
      paymentName: "Sahal Service",
      paymentID: "sahal",
      paymentImage: "https://baargeelle.com/images/sahal.png",
    },
    {
      paymentName: "Jeeb",
      paymentID: "jeep",
      paymentImage: "https://baargeelle.com/images/jeep.png",
    },
    {
      paymentName: "ZAAD",
      paymentID: "zaad",
      paymentImage: "https://baargeelle.com/images/zaad.png",
    },
  ];

  useEffect(() => {
    setSelectedPayment(payment[0].paymentID)
  }, [])

  return (
    <div className="home__payment__container">
      <span className="payment__title">Payment Method</span>
      <div className="payment__cards">
        {payment.map((data, index) => (
          <div
            className={`${isSelectedindex == index
              ? "payment__card__info selected"
              : "payment__card__info"
              }`}
            onClick={() => {
              onselect(index);
              setSelectedPayment(data.paymentID)
            }}
            key={data.paymentID}
          >
            <img
              className="payment__card__img"
              src={data.paymentImage}
              alt="evc-img"
            />
            <span className="payment__card__name">{data.paymentName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSection;
