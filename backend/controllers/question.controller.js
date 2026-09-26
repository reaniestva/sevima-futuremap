const { Question, Option } = require("../models");

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
        {
          model: Option,
        },
      ],
    });

    res.status(200).json({
      message: "Questions retrieved successfully",
      questions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve questions",
      error: error.message,
    });
  }
};

const createQuestion = async (req, res) => {
  try {
    const { assessment_id, question } = req.body;

    if (!assessment_id || !question) {
      return res.status(400).json({
        message: "Assessment ID and question are required",
      });
    }

    const newQuestion = await Question.create({
      assessment_id,
      question,
    });

    res.status(201).json({
      message: "Question created successfully",
      question: newQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create question",
      error: error.message,
    });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { assessment_id, question } = req.body;

    const existingQuestion = await Question.findByPk(id);

    if (!existingQuestion) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    await existingQuestion.update({
      assessment_id,
      question,
    });

    res.status(200).json({
      message: "Question updated successfully",
      question: existingQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update question",
      error: error.message,
    });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findByPk(id);

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    await question.destroy();

    res.status(200).json({
      message: "Question deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete question",
      error: error.message,
    });
  }
};

module.exports = {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};