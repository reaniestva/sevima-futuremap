const { AssessmentResult } = require("../models");

const getAssessmentResults = async (req, res) => {
  try {
    const results = await AssessmentResult.findAll();

    res.status(200).json({
      message: "Assessment results retrieved successfully",
      results,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve assessment results",
      error: error.message,
    });
  }
};

const createAssessmentResult = async (req, res) => {
  try {
    const { user_id, assessment_id, result, score } = req.body;

    if (!user_id || !assessment_id || !result) {
      return res.status(400).json({
        message: "User ID, assessment ID, and result are required",
      });
    }

    const assessmentResult = await AssessmentResult.create({
      user_id,
      assessment_id,
      result,
      score: score || 0,
    });

    res.status(201).json({
      message: "Assessment result created successfully",
      assessmentResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create assessment result",
      error: error.message,
    });
  }
};

const updateAssessmentResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { result, score } = req.body;

    const assessmentResult = await AssessmentResult.findByPk(id);

    if (!assessmentResult) {
      return res.status(404).json({
        message: "Assessment result not found",
      });
    }

    await assessmentResult.update({
      result,
      score,
    });

    res.status(200).json({
      message: "Assessment result updated successfully",
      assessmentResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update assessment result",
      error: error.message,
    });
  }
};

const deleteAssessmentResult = async (req, res) => {
  try {
    const { id } = req.params;

    const assessmentResult = await AssessmentResult.findByPk(id);

    if (!assessmentResult) {
      return res.status(404).json({
        message: "Assessment result not found",
      });
    }

    await assessmentResult.destroy();

    res.status(200).json({
      message: "Assessment result deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete assessment result",
      error: error.message,
    });
  }
};

module.exports = {
  getAssessmentResults,
  createAssessmentResult,
  updateAssessmentResult,
  deleteAssessmentResult,
};