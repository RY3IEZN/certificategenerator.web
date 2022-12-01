const express = require("express");
const router = express.Router();





const {
  addUserProfile,
  getUserProfile,
  updateUserProfile,
  uploadOptions
} = require("../controllers/profileController");

// for getting each user profile
router.get("/", getUserProfile);

// for creating each user profile
router.post("/", addUserProfile, uploadOptions.single('brandKit'));

//for updating userProfile
router.put('/', updateUserProfile);

module.exports = router;
