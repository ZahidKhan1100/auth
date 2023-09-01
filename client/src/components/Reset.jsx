import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import style from "../css/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../helper/Validate";

const Reset = () => {
  const [password, setPassword] = useState('');
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: ""
    },
    validate:resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      setPassword(values.password)
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={style.glass} style={{width:"50%"}}>
          <div className="title flex items-center flex-col">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter New Password
            </span>
          </div>
          <form className="pt-10" onSubmit={formik.handleSubmit}>
            
            <div className="textbox flex flex-col items-center gap-2">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                className={style.textbox}
                placeholder="Password"
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                type="password"
                className={style.textbox}
                placeholder="Confirm Password"
              />
              <button type="submit" className={style.btn}>
                Reset
              </button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
