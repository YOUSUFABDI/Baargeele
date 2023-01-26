import { useState } from "react";
import { useLocalData } from "./DataContext";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(errors = validateForms(values))
    if (errors.loginGmail || errors.loginPass) {
      console.log("error")
    } else {
      console.log("done")
      setIslogin(localStorage.getItem("isLogin"));
      if (localStorage.getItem("isLogin") == null) {
        localStorage.setItem("isLogin", "false");
      } else {
        localStorage.setItem("isLogin", "true")
        setIslogin(localStorage.getItem("isLogin"));
      }
      navigate("/");
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
