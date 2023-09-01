const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please Provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide unique email"],
    unique: [true, "Email Exist"],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  profile: {
    type: String,
  },
});

module.exports = mongoose.model.Users || mongoose.model("User", UserSchema);
