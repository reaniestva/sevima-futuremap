const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getMajors,
  createMajor,
  updateMajor,
  deleteMajor,
} = require("../controllers/major.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getMajors
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createMajor
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateMajor
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteMajor
);

module.exports = router;