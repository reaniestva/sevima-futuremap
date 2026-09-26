const { AssessmentResult, Assessment } = require("../models");

const getAssessmentResults = async (req, res) => {
  try {
    const results = await AssessmentResult.findAll({
      where: {
        user_id: req.user.id,
      },
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      message: "Assessment results retrieved successfully",
      results,
    });
  } catch (error) {
    console.error("Get assessment results error:", error);

    return res.status(500).json({
      message: "Failed to retrieve assessment results",
      error: error.message,
    });
  }
};

const getAssessmentResultById = async (req, res) => {
  try {
    const result = await AssessmentResult.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id,
      },
    });

    if (!result) {
      return res.status(404).json({
        message: "Assessment result not found",
      });
    }

    return res.status(200).json({
      message: "Assessment result retrieved successfully",
      result,
    });
  } catch (error) {
    console.error("Get assessment result error:", error);

    return res.status(500).json({
      message: "Failed to retrieve assessment result",
      error: error.message,
    });
  }
};

const createAssessmentResult = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      order: [["id", "ASC"]],
    });

    if (!assessment) {
      return res.status(400).json({
        message:
          "No assessment found. Please create an assessment first.",
      });
    }

    const newResult = await AssessmentResult.create({
      user_id: req.user.id,
      assessment_id: assessment.id,

      result: "Explorative",

      score: 82,
    });

    return res.status(201).json({
      message: "Assessment result created successfully",
      result: newResult,
    });
  } catch (error) {
    console.error(
      "Create assessment result error:",
      error
    );

    return res.status(500).json({
      message: "Failed to create assessment result",
      error: error.message,
    });
  }
};

const updateAssessmentResult = async (req, res) => {
  try {
    const assessmentResult =
      await AssessmentResult.findOne({
        where: {
          id: req.params.id,
          user_id: req.user.id,
        },
      });

    if (!assessmentResult) {
      return res.status(404).json({
        message: "Assessment result not found",
      });
    }

    await assessmentResult.update({
      result:
        req.body.result ??
        assessmentResult.result,

      score:
        req.body.score ??
        assessmentResult.score,
    });

    return res.status(200).json({
      message:
        "Assessment result updated successfully",
      result: assessmentResult,
    });
  } catch (error) {
    console.error(
      "Update assessment result error:",
      error
    );

    return res.status(500).json({
      message:
        "Failed to update assessment result",
      error: error.message,
    });
  }
};

const deleteAssessmentResult = async (req, res) => {
  try {
    const assessmentResult =
      await AssessmentResult.findOne({
        where: {
          id: req.params.id,
          user_id: req.user.id,
        },
      });

    if (!assessmentResult) {
      return res.status(404).json({
        message: "Assessment result not found",
      });
    }

    await assessmentResult.destroy();

    return res.status(200).json({
      message:
        "Assessment result deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete assessment result error:",
      error
    );

    return res.status(500).json({
      message:
        "Failed to delete assessment result",
      error: error.message,
    });
  }
};

module.exports = {
  getAssessmentResults,
  getAssessmentResultById,
  createAssessmentResult,
  updateAssessmentResult,
  deleteAssessmentResult,
};