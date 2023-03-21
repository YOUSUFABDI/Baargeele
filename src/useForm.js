import { useState } from "react";
import { useLocalData } from "./DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const useForm = (validateForms) => {
  let [values, setValues] = useState({
    name: "",
    phone: null,
    gmail: "",
    password: "",
    loginGmail: "",
    loginPass: "",
    otp: "",
    editName: "",
    editGmail: "",
    editPhone: "",
    editPass: "",
    contactName: "",
    contactGmail: "",
    contactMessage: "",
  });

  const navigate = useNavigate();

  let [errors, setErrors] = useState({});

  const { islogin, setIslogin } = useLocalData();

  let [isLoading, setIsloading] = useState(false);

  const [user, setUser] = useState([]);
  const userGmail = localStorage.getItem("userGmail");

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

  // Login
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



  //GetUserInfo
  function getUser() {
    setIsloading(true)
    const params = new URLSearchParams();
    params.append("UserGmail", userGmail);
    axios
      .post("https://baargeelle.com/flutterConn/get_users.php", params)
      .then((response) => {
        setUser(response.data[0]);
        setValues(values = {
          editName: response.data[0].Name,
          editGmail: response.data[0].Gmail,
          editPhone: response.data[0].Phone,
          editPass: response.data[0].Password
        })
      }).then(() => setIsloading((isLoading = false)));
  }



  //Update
  function update(name, gmail, phone, password) {
    setIsloading((isLoading = true));
    const params = new URLSearchParams();
    params.append("FullName", name);
    params.append("Gmail", gmail);
    params.append("PhoneNumber", phone);
    params.append("Password", password);
    axios
      .post("https://baargeelle.com/flutterConn/update.php", params)
      .then((response) => {
        var data = response.data;
        if (data == "Success") {
          toast.success("User Updated")
        } else {
          toast.error("Something wrong")
        }
      })
      .then(() => setIsloading((isLoading = false)));
  }



  //create Account
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


  //OTP
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

  //Login Function
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



  //Login Button
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

  //OTO Button
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

  //Update Button
  const handleSave = (event) => {
    event.preventDefault();
    setErrors((errors = validateForms(values)));
    if (errors.editName || errors.editGmail || errors.editPhone || errors.editPass) {
      console.log("error")
    } else {
      console.log("done")
      update(values.editName, values.editGmail, values.editPhone, values.editPass)
    }
  };

  //Get in Touch
  function getInTouch(Name, Gmail, Message) {
    setIsloading((isLoading = true));
    const params = new URLSearchParams();
    params.append("Name", Name);
    params.append("Gmail", Gmail);
    params.append("Message", Message);
    axios
      .post("https://baargeelle.com/flutterConn/reports.php", params)
      .then((response) => {
        var data = response.data;
        if (data == "Success") {
          toast.success("Success!");
          setValues(({
            contactName: "",
            contactGmail: "",
            contactMessage: "",
          }));
        } else {
          toast.error("Some thing wrong")
        }
      })
      .then(() => setIsloading((isLoading = false)));
  }

  //Get in Touch Button
  const handleGetInTouch = (event) => {
    event.preventDefault();
    setErrors((errors = validateForms(values)));
    if (errors.contactName || errors.contactGmail || errors.contactMessage) {
      console.log("error")
    } else {
      console.log("done")
      getInTouch(values.contactName, values.contactGmail, values.contactMessage)
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleOTP,
    handleChangeOTP,
    setValues,
    handleSave,
    handleGetInTouch,
    values,
    errors,
    isLoading,
    getUser,
  };
};

export default useForm;
