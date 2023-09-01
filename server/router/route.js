const express = require("express");
const controller = require("../controllers/appController");

const router = express.Router();

// Post Methods

router.route("/register").post(controller.register1);
// router.route("/registerMail").post();
router.route("/authenticate").post((req,res)=> res.end());
router.route("/login").post(controller.login);

// Get Methds

router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);


// Put Methods
router.route('/updateUser').put(controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);



module.exports = router;
