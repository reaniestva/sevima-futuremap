const { Assessment } = require("../models");

const getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.findAll();

    res.status(200).json({
      message: "Assessments retrieved successfully",
      assessments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve assessments",
      error: error.message,
    });
  }
};

const createAssessment = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const assessment = await Assessment.create({
      title,
      description,
    });

    res.status(201).json({
      message: "Assessment created successfully",
      assessment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create assessment",
      error: error.message,
    });
  }
};

const updateAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const assessment = await Assessment.findByPk(id);

    if (!assessment) {
      return res.status(404).json({
        message: "Assessment not found",
      });
    }

    await assessment.update({
      title,
      description,
    });

    res.status(200).json({
      message: "Assessment updated successfully",
      assessment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update assessment",
      error: error.message,
    });
  }
};

const deleteAssessment = async (req, res) => {
  try {
    const { id } = req.params;

    const assessment = await Assessment.findByPk(id);

    if (!assessment) {
      return res.status(404).json({
        message: "Assessment not found",
      });
    }

    await assessment.destroy();

    res.status(200).json({
      message: "Assessment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete assessment",
      error: error.message,
    });
  }
};

module.exports = {
  getAssessments,
  createAssessment,
  updateAssessment,
  deleteAssessment,
};