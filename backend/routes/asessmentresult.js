const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getAssessmentResults,
  createAssessmentResult,
  updateAssessmentResult,
  deleteAssessmentResult,
} = require("../controllers/assessmentresult.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getAssessmentResults
);

router.post(
  "/",
  authenticateToken,
  createAssessmentResult
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateAssessmentResult
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteAssessmentResult
);

module.exports = router;