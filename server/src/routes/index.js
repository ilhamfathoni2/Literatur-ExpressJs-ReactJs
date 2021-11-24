const express = require("express");

const router = express.Router();

const { auth, adminOnly } = require("../middlewares/auth");
const {
  register,
  login,
  deleteUser,
  getAllUsers,
  checkAuth,
  user,
  updateUser,
} = require("../controllers/auth");

const {
  addLiteratur,
  getLiteraturs,
  getLiteraturId,
  editLiteratur,
} = require("../controllers/literatur");

const { avatarFile } = require("../middlewares/avatar");
const { attacheFile } = require("../middlewares/files");

// Route
router.post("/register", register);
router.post("/login", login);
router.get("/users", auth, adminOnly, getAllUsers);
router.patch("/users/:id", auth, avatarFile("avatar"), updateUser);
router.delete("/users/:id", auth, adminOnly, deleteUser);

router.get("/check-auth", auth, checkAuth);
router.get("/user-data", auth, user);

router.get("/literatur", auth, getLiteraturs);
router.get("/literatur/:id", auth, getLiteraturId);
router.patch("/literatur/:id", auth, editLiteratur);
router.post("/add-literatur", auth, attacheFile("attache"), addLiteratur);

module.exports = router;
