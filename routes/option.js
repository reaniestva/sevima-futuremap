const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getOptions,
  createOption,
  updateOption,
  deleteOption,
} = require("../controllers/option.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getOptions
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createOption
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateOption
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteOption
);

module.exports = router;