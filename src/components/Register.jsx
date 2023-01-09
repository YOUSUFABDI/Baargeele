import RegImg from "../../assets/images/lgImg.png";

const Register = () => {
  return (
    <div className="registeration__container">
      <div className="registeration__reg__img">
        <img src={RegImg} alt="reg-img" />
      </div>
      <div className="registeration__reg">
        <h2>Register</h2>
        <form className="registeration__form__control">
          <div className="registeration__reverse">
            <span>Name</span>
            <input type="text" />
          </div>
          <div className="registeration__reverse">
            <span>Phone Number</span>
            <input type="text" />
          </div>
          <div className="registeration__reverse">
            <span>Gmail</span>
            <input type="text" />
          </div>
          <div className="registeration__reverse">
            <span>Password</span>
            <input type="text" />
          </div>
          <button className="registeration__btn">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
