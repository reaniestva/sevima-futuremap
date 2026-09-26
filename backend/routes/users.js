const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  getUsers
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createUser
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateUser
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteUser
);

module.exports = router;