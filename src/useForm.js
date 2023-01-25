import { useState } from "react";
import { useLocalData } from "./DataContext";
import Home from "./components/HomePage/Home";
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

  const [errors, setErrors] = useState({});

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
    setErrors(validateForms(values));

    setIslogin(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") == null) {
      localStorage.setItem("isLogin", "false");
    } else {
      setIslogin(localStorage.setItem("isLogin", "true"));
    }
    navigate("/")
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;