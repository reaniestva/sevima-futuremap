const express = require("express");

const router = express.Router();

const authenticateToken = require("../middleware/authenticateToken");

const {
  getAssessmentResults,
  getAssessmentResultById,
  createAssessmentResult,
  updateAssessmentResult,
  deleteAssessmentResult,
} = require("../controllers/assessmentResultController");

router.get(
  "/",
  authenticateToken,
  getAssessmentResults
);

router.get(
  "/:id",
  authenticateToken,
  getAssessmentResultById
);

router.post(
  "/",
  authenticateToken,
  createAssessmentResult
);

router.put(
  "/:id",
  authenticateToken,
  updateAssessmentResult
);

router.delete(
  "/:id",
  authenticateToken,
  deleteAssessmentResult
);

module.exports = router;