const { MajorRecommendation } = require("../models");

const getRecommendations = async (req, res) => {
  try {
    const recommendations = await MajorRecommendation.findAll();

    res.status(200).json({
      message: "Major recommendations retrieved successfully",
      recommendations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve recommendations",
      error: error.message,
    });
  }
};

const createRecommendation = async (req, res) => {
  try {
    const { user_id, major_id, score, rank } = req.body;

    if (!user_id || !major_id || rank === undefined) {
      return res.status(400).json({
        message: "User ID, major ID, and rank are required",
      });
    }

    const recommendation = await MajorRecommendation.create({
      user_id,
      major_id,
      score: score || 0,
      rank,
    });

    res.status(201).json({
      message: "Major recommendation created successfully",
      recommendation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create recommendation",
      error: error.message,
    });
  }
};

const updateRecommendation = async (req, res) => {
  try {
    const { id } = req.params;
    const { major_id, score, rank } = req.body;

    const recommendation = await MajorRecommendation.findByPk(id);

    if (!recommendation) {
      return res.status(404).json({
        message: "Major recommendation not found",
      });
    }

    await recommendation.update({
      major_id,
      score,
      rank,
    });

    res.status(200).json({
      message: "Major recommendation updated successfully",
      recommendation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update recommendation",
      error: error.message,
    });
  }
};

const deleteRecommendation = async (req, res) => {
  try {
    const { id } = req.params;

    const recommendation = await MajorRecommendation.findByPk(id);

    if (!recommendation) {
      return res.status(404).json({
        message: "Major recommendation not found",
      });
    }

    await recommendation.destroy();

    res.status(200).json({
      message: "Major recommendation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete recommendation",
      error: error.message,
    });
  }
};

module.exports = {
  getRecommendations,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
};