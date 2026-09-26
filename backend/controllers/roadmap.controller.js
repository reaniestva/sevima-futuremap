const { Roadmap } = require("../models");

const getRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.findAll();

    res.status(200).json({
      message: "Roadmaps retrieved successfully",
      roadmaps,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve roadmaps",
      error: error.message,
    });
  }
};

const createRoadmap = async (req, res) => {
  try {
    const { user_id, major_id, title } = req.body;

    if (!user_id || !major_id || !title) {
      return res.status(400).json({
        message: "User ID, major ID, and title are required",
      });
    }

    const roadmap = await Roadmap.create({
      user_id,
      major_id,
      title,
    });

    res.status(201).json({
      message: "Roadmap created successfully",
      roadmap,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create roadmap",
      error: error.message,
    });
  }
};

const updateRoadmap = async (req, res) => {
  try {
    const { id } = req.params;
    const { major_id, title } = req.body;

    const roadmap = await Roadmap.findByPk(id);

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    await roadmap.update({
      major_id,
      title,
    });

    res.status(200).json({
      message: "Roadmap updated successfully",
      roadmap,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update roadmap",
      error: error.message,
    });
  }
};

const deleteRoadmap = async (req, res) => {
  try {
    const { id } = req.params;

    const roadmap = await Roadmap.findByPk(id);

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    await roadmap.destroy();

    res.status(200).json({
      message: "Roadmap deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete roadmap",
      error: error.message,
    });
  }
};

module.exports = {
  getRoadmaps,
  createRoadmap,
  updateRoadmap,
  deleteRoadmap,
};