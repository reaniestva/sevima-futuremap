const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getLearningProgresses,
  createLearningProgress,
  updateLearningProgress,
  deleteLearningProgress,
} = require("../controllers/learningprogress.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getLearningProgresses
);

router.post(
  "/",
  authenticateToken,
  createLearningProgress
);

router.put(
  "/:id",
  authenticateToken,
  updateLearningProgress
);

router.delete(
  "/:id",
  authenticateToken,
  deleteLearningProgress
);

module.exports = router;