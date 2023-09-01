// Validate Username
import { toast } from "react-hot-toast";

export const usernameValidate = async (values) => {
  const errors = usernameVerify({}, values);
  return errors;
};

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required ....");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username");
  }

  return error;
}

// Password Validate

export const validatePassword = (values) => {
  const errors = passwordVerify({}, values);

  return errors;
};

function passwordVerify(errors = {}, values) {
  const hasSpecialCharacter = /^(?=.*[@!#$%^&*()_+{}\[\]:;<>,.?~\\/-])/;
  if (!values.password) {
    errors.password = toast.error("Password Required ....");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password");
  } else if (values.password.length < 8) {
    errors.password = toast.error(
      "Password must be more than 8 characters long"
    );
  } else if (!hasSpecialCharacter.test(values.password)) {
    errors.password = toast.error("Password must have a special character");
  }

  return errors;
}

// Reset Password Validation

export const resetPasswordValidate = (values) => {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password Not Match ...!");
  }
  return errors;
};

// Validate Registration

export const registrationValidate = (values) => {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
};

function emailVerify(errors = {}, values) {
  if (!values.email) {
    errors.email = toast.error("Email Required ....");
  } else if (values.email.includes(" ")) {
    errors.email = toast.error("Wrong Email");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = toast.error("Invalid email address...!");
  }

  return errors;
}

// Profile Validate

export const profileValidate = (values) => {
  const errors = firstnameVerify({}, values);
  lastnameVerify(errors, values);
  mobileVerify(errors, values);
  addressVerify(errors, values);
};

function firstnameVerify(errors = {}, values) {
  if (!values.firstName) {
    errors.firstName = toast.error("Firstname Required....!");
  } else if (values.firstName.includes(" ")) {
    errors.firstName = toast.error("Invalid Firstname....!");
  }
}

function lastnameVerify(errors = {}, values) {
  if (!values.lastName) {
    errors.lastName = toast.error("Lastname Required....!");
  } else if (values.lastName.includes(" ")) {
    errors.lastName = toast.error("Invalid Lastname....!");
  }
}

function mobileVerify(errors = {}, values) {
  if (!values.mobile) {
    errors.mobile = toast.error("Mobile Number Required....!");
  } else if (values.mobile.includes(" ")) {
    errors.mobile = toast.error("Invalid Mobile Number....!");
  }
}

function addressVerify(errors = {}, values) {
  if (!values.address) {
    errors.address = toast.error("Address Required....!");
  } else if (values.address.includes(" ")) {
    errors.address = toast.error("Invalid Address....!");
  }
}
