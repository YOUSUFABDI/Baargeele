import Header from "../Header/Header";
import "./contact.css";
import getInTouchImg from "../../../assets/images/Get-in-touch.svg";
import { BsWhatsapp } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import useForm from "../../useForm";
import validateForms from "../../validateForms";

const Contact = () => {
  const { handleChange, handleGetInTouch, values, errors, isLoading } =
    useForm(validateForms);

  return (
    <div className="wrapper">
      <nav className="navbar">
        <Header />
      </nav>

      <div className="contact__wrapper">
        <div className="contact__img__info">
          <div className="image__info">
            <img
              className="contact__img"
              src={getInTouchImg}
              alt="get-in-touch-img"
            />
            <div className="info__wrapper">
              <div className="what__up__icon">
                <p className="info__wrappe__desc">Let's Talk</p>
                <BsWhatsapp className="info__wrappe__icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="get__in__touch__wrapper">
          <h2>Get in touch</h2>
          <form className="get__in__touch__form">
            <div className="get__in__touch__container">
              <div
                className={`${
                  errors.contactName
                    ? "get__in__touch__inpu__wrapper__error"
                    : "get__in__touch__inpu__wrapper"
                }`}
              >
                <BsFilePerson className="get__in__touch__icon" size={20} />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="contactName"
                  value={values.contactName}
                  onChange={handleChange}
                />
              </div>
              {errors.contactName && (
                <p className="get__in__touch__p__err">{errors.contactName}</p>
              )}
            </div>

            <div className="get__in__touch__container">
              <div
                className={`${
                  errors.contactGmail
                    ? "get__in__touch__inpu__wrapper__error"
                    : "get__in__touch__inpu__wrapper"
                }`}
              >
                <MdOutlineEmail className="get__in__touch__icon" size={20} />
                <input
                  type="text"
                  placeholder="Enter Gmail"
                  name="contactGmail"
                  value={values.contactGmail}
                  onChange={handleChange}
                />
              </div>
              {errors.contactGmail && (
                <p className="get__in__touch__p__err">{errors.contactGmail}</p>
              )}
            </div>

            <div className="get__in__touch__container">
              <div
                className={`${
                  errors.contactMessage
                    ? "get__in__touch__text__input__wrapper__error"
                    : "get__in__touch__text__input__wrapper"
                }`}
              >
                <textarea
                  name="contactMessage"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  value={values.contactMessage}
                  onChange={handleChange}
                ></textarea>
              </div>
              {errors.contactMessage && (
                <p className="get__in__touch__p__err">
                  {errors.contactMessage}
                </p>
              )}
            </div>
            <button className="info__wrapper__btn" onClick={handleGetInTouch}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
