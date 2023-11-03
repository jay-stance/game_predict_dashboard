import React from "react";
import { useFormik } from "formik";
import { Spinner } from 'loading-animations-react';
import { ToastContainer } from "react-toastify";


import AppFormInput from "../../components/AppFormInput/AppFormInput";
import AppText from "../../components/AppText/AppText";
import AppButton from "../../components/AppButton/AppButton";
import { LoginSchema } from "../../utils/schema";

import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../../redux/slices/userSlice";
import "./Login.css";

import { adminLoginService } from "../../services/authService";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.utils.loading)


  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values) => {
    const {email, password} = values

    const res = await adminLoginService({email, password})
    console.log("res form logging is \b\b", res)

    dispatch(
      setLoggedIn({
        loggedIn: true,
        user: res.admin,
        token: res.token
      })
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = formik;

  return (
    <div className="Login_body">

<div className="toast_container">
        <ToastContainer autoClose={1000} />
    </div>


    {loading && 
      <div className="loading_container">
          <div className="loading_main">
              <Spinner color1="blue" color2="#fff" textColor="rgba(0,0,0, 0.5)" />
          </div>
      </div>
    }


      <div className="main_login">
        <AppText
          header
          center
          content={"Welcome back!"}
          styles={"mb-10"}
        />
        <AppFormInput
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />

        <AppFormInput
          placeholder="Enter your password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          secureTextEntry={true}
          error={touched.password && errors.password}
        />

        <div className="btn_container">
          <AppButton onClick={handleSubmit} label="Login" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
