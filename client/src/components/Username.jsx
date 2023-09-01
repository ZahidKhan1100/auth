import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import style from "../css/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";

const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate:usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={style.glass}>
          <div className="title flex items-center flex-col">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={style.profile_img} src={avatar} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-2">
              <input
                {...formik.getFieldProps('username')}
                type="text"
                className={style.textbox}
                placeholder="User Name"
              />
              <button type="submit" className={style.btn}>
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span>
                Not a Member{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
