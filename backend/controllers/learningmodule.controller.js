const { LearningModule } = require("../models");

const getLearningModules = async (req, res) => {
  try {
    const modules = await LearningModule.findAll();

    res.status(200).json({
      message: "Learning modules retrieved successfully",
      modules,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve learning modules",
      error: error.message,
    });
  }
};

const createLearningModule = async (req, res) => {
  try {
    const {
      major_id,
      title,
      description,
      type,
      duration,
      content,
    } = req.body;

    if (!major_id || !title || !type || !duration) {
      return res.status(400).json({
        message: "Major ID, title, type, and duration are required",
      });
    }

    const module = await LearningModule.create({
      major_id,
      title,
      description,
      type,
      duration,
      content,
    });

    res.status(201).json({
      message: "Learning module created successfully",
      module,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create learning module",
      error: error.message,
    });
  }
};

const updateLearningModule = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      major_id,
      title,
      description,
      type,
      duration,
      content,
    } = req.body;

    const module = await LearningModule.findByPk(id);

    if (!module) {
      return res.status(404).json({
        message: "Learning module not found",
      });
    }

    await module.update({
      major_id,
      title,
      description,
      type,
      duration,
      content,
    });

    res.status(200).json({
      message: "Learning module updated successfully",
      module,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update learning module",
      error: error.message,
    });
  }
};

const deleteLearningModule = async (req, res) => {
  try {
    const { id } = req.params;

    const module = await LearningModule.findByPk(id);

    if (!module) {
      return res.status(404).json({
        message: "Learning module not found",
      });
    }

    await module.destroy();

    res.status(200).json({
      message: "Learning module deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete learning module",
      error: error.message,
    });
  }
};

module.exports = {
  getLearningModules,
  createLearningModule,
  updateLearningModule,
  deleteLearningModule,
};