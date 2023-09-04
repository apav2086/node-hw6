const router = require("express").Router();
const {
  signup,
  login,
  logout,
  current,
 avatarUpdate,
  avatarUpload,
  handleAvatarUpload,
  verify,
} = require("../controllers/userController");

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/logout").post(logout);
router.route("/current").post(current);
router.route("/upload").post(avatarUpload, handleAvatarUpload);
router.route("/avatars").patch(avatarUpload, avatarUpdate);
router.route("/verify/:verificationToken").get(verify);

module.exports = router;