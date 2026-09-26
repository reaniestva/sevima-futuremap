const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getAssessments,
  createAssessment,
  updateAssessment,
  deleteAssessment,
} = require("../controllers/assessment.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getAssessments
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createAssessment
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateAssessment
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteAssessment
);

module.exports = router;