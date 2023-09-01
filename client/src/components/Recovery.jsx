import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import style from "../css/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";

const Recovery = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={style.glass}>
          <div className="title flex items-center flex-col">
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password
            </span>
          </div>
          <form className="pt-10">
            <div className="textbox flex flex-col items-center gap-2">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter six digit OTP sent to your email address
                </span>
                <input
                  type="text"
                  className={style.textbox}
                  placeholder="OTP"
                />
              </div>

              <button type="submit" className={style.btn}>
                Recover
              </button>
            </div>
            <div className="text-center py-4">
              <span>
                Can't get OTP? <button type="submit" className="text-red-500">Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
