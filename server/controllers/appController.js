const UserModel = require("../model/UserModal");

const bcrypt = require("bcrypt");

async function register(req, res) {
  try {
    const { username, email, password, profile } = req.body;

    // Check for the existing user by username
    const existingUsername = await UserModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: "Please use a unique username." });
    }

    // Check for the existing user by email
    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Please use a unique email." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new UserModel({
      username,
      password: hashedPassword,
      profile: profile || "",
      email,
    });

    // Save the user to the database
    const result = await user.save();

    // Return a success response
    return res.status(201).json({ message: "User registered" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
}


// async function register(req, res) {
//   try {
//     const { username, email, password, profile } = req.body;
//     // check for the existing user
//     console.log(username);
//     const ExistUsername = new Promise((reject, resolve) => {
//       UserModel.findOne({ username }, function (err, user) {
//         if (err) reject(new Error(err));
//         if (user) reject({ error: "please use unique username" });
//         resolve();
//       });
//     });
//     // check for the existing Email
//     const ExistEmail = new Promise((reject, resolve) => {
//       UserModel.findOne({ email }, function (err, email) {
//         if (err) reject(new Error(err));
//         if (email) reject({ error: "please use unique Email" });
//         resolve();
//       });
//     });

//     Promise.all([ExistUsername, ExistEmail])
//       .then(() => {
//         if (password) {
//           bcrypt
//             .hash(password, 10)
//             .then((hashedPassword) => {
//               const user = new UserModel({
//                 username,
//                 password: hashedPassword,
//                 profile: profile || "",
//                 email,
//               });

//               user
//                 .save()
//                 .then((result) =>
//                   res.status(201).send({ message: "user registered" })
//                 )
//                 .catch((error) => res.status(500).send({ error:"error" }));
//             })
//             .catch((error) => {
//               res.status(500).send({
//                 error: "enable to hashed password",
//               });
//             });
//         }
//       })
//       .catch((error) => {
//         return res.status(500).send({ error:"" });
//       });
//   } catch (error) {
//     return res.status(500).send({ error: "error" });
//   }
// }

async function login(req, res) {
  res.json("Login route");
}

async function getUser(req, res) {
  res.json("GetUser route");
}

async function updateUser(req, res) {
  res.json("GetUser route");
}

async function generateOTP(req, res) {
  res.json("GetUser route");
}

async function verifyOTP(req, res) {
  res.json("GetUser route");
}

async function createResetSession(req, res) {
  res.json("GetUser route");
}

async function resetPassword(req, res) {
  res.json("GetUser route");
}

module.exports = {
  register,
  login,
  getUser,
  updateUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};
