import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import style from "../css/Username.module.css";
import extend from "../css/Profile.module.css";

import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "../helper/Validate";
import convertToBase64 from "../helper/Convert";

const Profile = () => {
  const [file, setFile] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      mobile: "",
      email: "",
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div
          className={`${style.glass} ${extend.glass}`}
          style={{ width: "45%", paddingTop: "3em" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={`${style.profile_img} ${extend.profile_img}`}
                  alt="avatar"
                />
              </label>

              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-3">
              <div className="name flex w-3/4 gap-5">
                <input
                  {...formik.getFieldProps("firstName")}
                  type="text"
                  className={`${style.textbox} ${extend.textbox}`}
                  placeholder="First Name"
                />
                <input
                  {...formik.getFieldProps("lastName")}
                  type="text"
                  className={`${style.textbox} ${extend.textbox}`}
                  placeholder="Last Name"
                />
              </div>
              <div className="name flex w-3/4 gap-5">
                <input
                  {...formik.getFieldProps("mobile")}
                  type="text"
                  className={`${style.textbox} ${extend.textbox}`}
                  placeholder="Mobile Number"
                />
                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  className={`${style.textbox} ${extend.textbox}`}
                  placeholder="Email"
                />
              </div>

              <input
                {...formik.getFieldProps("address")}
                type="text"
                className={`${style.textbox} ${extend.textbox}`}
                placeholder="Address"
              />

              <button type="submit" className={style.btn}>
                Update
              </button>
            </div>
            <div className="text-center py-4">
              <span>
                Come back later?{" "}
                <Link to="/" className="text-red-500">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
