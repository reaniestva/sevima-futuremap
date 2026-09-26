const { LearningProgress } = require("../models");

const getLearningProgresses = async (req, res) => {
  try {
    const { id, role } = req.user;

    const whereCondition = role === "admin"
      ? {}
      : { user_id: id };

    const progresses = await LearningProgress.findAll({
      where: whereCondition,
    });

    res.status(200).json({
      message: "Learning progress retrieved successfully",
      progresses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve learning progress",
      error: error.message,
    });
  }
};

const createLearningProgress = async (req, res) => {
  try {
    const { id } = req.user;
    const { module_id } = req.body;

    if (!module_id) {
      return res.status(400).json({
        message: "Module ID is required",
      });
    }

    const existingProgress = await LearningProgress.findOne({
      where: {
        user_id: id,
        module_id,
      },
    });

    if (existingProgress) {
      return res.status(400).json({
        message: "Learning progress already exists",
      });
    }

    const progress = await LearningProgress.create({
      user_id: id,
      module_id,
      status: "not_started",
    });

    res.status(201).json({
      message: "Learning progress created successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create learning progress",
      error: error.message,
    });
  }
};

const updateLearningProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId, role } = req.user;
    const { status } = req.body;

    const progress = await LearningProgress.findByPk(id);

    if (!progress) {
      return res.status(404).json({
        message: "Learning progress not found",
      });
    }

    if (role !== "admin" && progress.user_id !== userId) {
      return res.status(403).json({
        message: "You can only update your own learning progress",
      });
    }

    if (!["not_started", "in_progress", "completed"].includes(status)) {
      return res.status(400).json({
        message: "Invalid learning progress status",
      });
    }

    const completed_at = status === "completed"
      ? new Date()
      : null;

    await progress.update({
      status,
      completed_at,
    });

    res.status(200).json({
      message: "Learning progress updated successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update learning progress",
      error: error.message,
    });
  }
};

const deleteLearningProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId, role } = req.user;

    const progress = await LearningProgress.findByPk(id);

    if (!progress) {
      return res.status(404).json({
        message: "Learning progress not found",
      });
    }

    if (role !== "admin" && progress.user_id !== userId) {
      return res.status(403).json({
        message: "You can only delete your own learning progress",
      });
    }

    await progress.destroy();

    res.status(200).json({
      message: "Learning progress deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete learning progress",
      error: error.message,
    });
  }
};

module.exports = {
  getLearningProgresses,
  createLearningProgress,
  updateLearningProgress,
  deleteLearningProgress,
};