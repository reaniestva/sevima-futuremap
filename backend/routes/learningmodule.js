const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getLearningModules,
  createLearningModule,
  updateLearningModule,
  deleteLearningModule,
} = require("../controllers/learningmodule.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getLearningModules
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createLearningModule
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateLearningModule
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteLearningModule
);

module.exports = router;