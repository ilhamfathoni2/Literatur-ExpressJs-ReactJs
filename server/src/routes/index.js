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
  myCollections,
  bookMark,
  deleteBookMark,
  deleteLiteratur,
  myLiterature,
  searchLiteratur,
  downloadPDF,
} = require("../controllers/literatur");

const { avatarFile } = require("../middlewares/avatar");
const { attacheFile } = require("../middlewares/files");

// Auth
router.post("/register", register);
router.post("/login", login);

router.get("/users", auth, adminOnly, getAllUsers);
router.patch("/users/:id", auth, avatarFile("avatar"), updateUser);
router.delete("/users/:id", auth, adminOnly, deleteUser);

router.get("/check-auth", checkAuth);
router.get("/user-data", auth, user);
// Close Auth

// Literatur
router.get("/literatur", auth, getLiteraturs);
router.get("/literatur/:id", auth, getLiteraturId);
router.get("/download/:id", downloadPDF);
router.patch("/literatur/:id", auth, editLiteratur);
router.get("/my-literature", auth, myLiterature);
router.delete("/literatur/:id", auth, deleteLiteratur);
router.get("/collections", auth, myCollections);
router.delete("/collections/:id", auth, deleteBookMark);
router.post("/book-mark", auth, bookMark);

router.post("/search-literatur", auth, searchLiteratur);

router.post("/add-literatur", auth, attacheFile("attache"), addLiteratur);
// Close Literatur

module.exports = router;
