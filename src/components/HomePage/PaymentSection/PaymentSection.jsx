import "./paymentSection.css";
import { useEffect, useState } from "react";
import evcPlusImg from "../../../../assets/images/evcplus.png";
import sahalImg from "../../../../assets/images/sahal.png";
import jeebImg from "../../../../assets/images/jeep.png";
import zaadImg from "../../../../assets/images/zaad.png";

const PaymentSection = ({ setSelectedPayment }) => {
  const [isSelectedindex, setisSelectedindex] = useState(0);
  const onselect = (index) => setisSelectedindex(index);
  // setSelectedPayment("evcplus")

  var payment = [
    {
      paymentName: "Evc Plus",
      paymentID: "evcplus",
      paymentImage: evcPlusImg,
    },
    {
      paymentName: "Sahal Service",
      paymentID: "sahal",
      paymentImage: sahalImg,
    },
    {
      paymentName: "Jeeb",
      paymentID: "jeep",
      paymentImage: jeebImg,
    },
    {
      paymentName: "ZAAD",
      paymentID: "zaad",
      paymentImage: zaadImg,
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
