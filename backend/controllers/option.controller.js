const { Option } = require("../models");

const getOptions = async (req, res) => {
  try {
    const options = await Option.findAll();

    res.status(200).json({
      message: "Options retrieved successfully",
      options,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve options",
      error: error.message,
    });
  }
};

const createOption = async (req, res) => {
  try {
    const { question_id, text, score } = req.body;

    if (!question_id || !text) {
      return res.status(400).json({
        message: "Question ID and text are required",
      });
    }

    const option = await Option.create({
      question_id,
      text,
      score: score || 0,
    });

    res.status(201).json({
      message: "Option created successfully",
      option,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create option",
      error: error.message,
    });
  }
};

const updateOption = async (req, res) => {
  try {
    const { id } = req.params;
    const { question_id, text, score } = req.body;

    const option = await Option.findByPk(id);

    if (!option) {
      return res.status(404).json({
        message: "Option not found",
      });
    }

    await option.update({
      question_id,
      text,
      score,
    });

    res.status(200).json({
      message: "Option updated successfully",
      option,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update option",
      error: error.message,
    });
  }
};

const deleteOption = async (req, res) => {
  try {
    const { id } = req.params;

    const option = await Option.findByPk(id);

    if (!option) {
      return res.status(404).json({
        message: "Option not found",
      });
    }

    await option.destroy();

    res.status(200).json({
      message: "Option deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete option",
      error: error.message,
    });
  }
};

module.exports = {
  getOptions,
  createOption,
  updateOption,
  deleteOption,
};