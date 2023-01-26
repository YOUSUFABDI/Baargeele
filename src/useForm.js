import { useState } from "react";
import { useLocalData } from "./DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useForm = (validateForms) => {
  const [values, setValues] = useState({
    name: "",
    phone: null,
    gmail: "",
    password: "",
    loginGmail: "",
    loginPass: "",
  });

  let [errors, setErrors] = useState({});

  const { islogin, setIslogin } = useLocalData();

  let [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function gmailLogin(loginGmail, loginPass) {
    setIsloading(isLoading = true)
    const params = new URLSearchParams();
    params.append('Gmail', loginGmail);
    params.append('Password', loginPass);
    axios
      .post("https://baargeelle.com/flutterConn/login.php", params)
      .then((response) => {
        var data = response.data;
        if (data == "Success") {
          alert("Login Success");
          loginDone()
        } else if (data == "incorretPass") {
          setErrors(errors = {
            loginPass: data,
          })
        } else {
          setErrors(errors = {
            loginGmail: "Email that you have entered is not exist!",
          })
        }
      }).then(() => setIsloading(isLoading = false));

  }


  function loginDone() {
    setIslogin(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") == null) {
      localStorage.setItem("isLogin", "false");
    } else {
      localStorage.setItem("isLogin", "true")
      setIslogin(localStorage.getItem("isLogin"));
    }
    navigate("/");
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(errors = validateForms(values))
    if (errors.loginGmail || errors.loginPass) {
      console.log("error")
    } else {
      console.log("done")
      gmailLogin(values.loginGmail, values.loginPass)
    }
  };

  return { handleChange, handleSubmit, values, errors, isLoading };
};

export default useForm;
