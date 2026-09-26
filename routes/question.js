const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/question.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getQuestions
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createQuestion
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateQuestion
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteQuestion
);

module.exports = router;