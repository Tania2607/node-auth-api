const express = require("express");
const router = express.Router();
const User = require("../Models/user.js");
const multer = require("multer");
const controller = require("../controller/user.js");

router.post("/create", controller.create);

router.post("/loginwithusername", controller.loginwithusername);

router.post("/verify-otp/");

router.post("/login", controller.login);

router.get("/profile/:id", controller.getById);

router.put("/update/:id", controller.update);

router.post("/change-password", controller.changePassword);

router.post("/forget-password", controller.forgetPassword);

router.get("/read-file", controller.readFile);

router.get("/get-all-users", controller.getAll);

router.delete("/delete-user/:id", controller.deleteUser);

router.get("/search-users", controller.search);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images");
  },
  filename: (req, file, cb) => {
    
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload-avatar/:id",
  upload.single("avatar"),
  controller.uploadAvatar
);

module.exports = router;
