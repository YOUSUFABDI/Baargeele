import { useState } from "react";
import { useLocalData } from "./DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const useForm = (validateForms) => {
  const [values, setValues] = useState({
    name: "",
    phone: null,
    gmail: "",
    password: "",
    loginGmail: "",
    loginPass: "",
    otp: "",
    editName: "Yuusuf Abdi",
    editGmail: "",
    editPhone: "",
    editPass: ""
  });

  const navigate = useNavigate();

  let [errors, setErrors] = useState({});

  const { islogin, setIslogin } = useLocalData();

  let [isLoading, setIsloading] = useState(false);

  // let [otp, setOTP] = useState("");

  const handleChangeOTP = (OTP) => {
    setValues({ otp: OTP, gmail: values.gmail });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function gmailLogin(loginGmail, loginPass) {
    setIsloading((isLoading = true));
    const params = new URLSearchParams();
    params.append("Gmail", loginGmail);
    params.append("Password", loginPass);
    axios
      .post("https://baargeelle.com/flutterConn/login.php", params)
      .then((response) => {
        var data = response.data;
        if (data == "Success") {
          toast.success("Login Success!");
          loginDone(loginGmail);
        } else if (data == "incorretPass") {
          setErrors(
            (errors = {
              loginPass: data,
            })
          );
        } else {
          setErrors(
            (errors = {
              loginGmail: "Email that you have entered is not exist!",
            })
          );
        }
      })
      .then(() => setIsloading((isLoading = false)));
  }

  function createAcc(name, gmail, phone, password) {
    setIsloading((isLoading = true));
    const params = new URLSearchParams();
    params.append("FullName", name);
    params.append("Gmail", gmail);
    params.append("PhoneNumber", phone);
    params.append("Password", password);
    axios
      .post("https://baargeelle.com/flutterConn/register.php", params)
      .then((response) => {
        var data = response.data;
        if (data == "Success") {
          navigate("/otp", { state: { userGmail: gmail } });
        } else {
          setErrors(
            (errors = {
              gmail: "Email that you have entered is already exist!",
            })
          );
        }
      })
      .then(() => setIsloading((isLoading = false)));
  }

  function authCheck(otp, gmail) {
    setIsloading((isLoading = true));
    const params = new URLSearchParams();
    params.append("Code", otp);
    params.append("Gmail", gmail);
    axios
      .post("https://baargeelle.com/flutterConn/auth.php", params)
      .then((response) => {
        var data = response.data;
        if (data == "Success") {
          toast.success("Success!");
          loginDone(gmail);
        } else {
          setErrors(
            (errors = {
              otp: "You've Entered InCorrect Code!",
            })
          );
        }
      })
      .then(() => setIsloading((isLoading = false)));
  }

  function loginDone(gmail) {
    setIslogin(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") == null) {
      localStorage.setItem("isLogin", "false");
    } else {
      localStorage.setItem("isLogin", "true");
      setIslogin(localStorage.getItem("isLogin"));
    }
    localStorage.setItem("userGmail", gmail);
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors((errors = validateForms(values)));
    if (errors.loginGmail || errors.loginPass) {
      console.log("error");
    } else {
      console.log("done");
      gmailLogin(values.loginGmail, values.loginPass);
    }
    if (errors.name || errors.gmail || errors.phone || errors.password) {
      console.log("error");
    } else {
      console.log("done");
      createAcc(values.name, values.gmail, values.phone, values.password);
    }
  };

  const handleOTP = (event) => {
    event.preventDefault();
    setErrors((errors = validateForms(values)));
    console.log(values.gmail);
    if (errors.otp) {
      console.log(errors.otp);
    } else {
      authCheck(values.otp, values.gmail);
      console.log("good");
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleOTP,
    handleChangeOTP,
    setValues,
    values,
    errors,
    isLoading,
  };
};

export default useForm;
