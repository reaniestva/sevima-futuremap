const { Major } = require("../models");

const getMajors = async (req, res) => {
  try {
    const majors = await Major.findAll();

    res.status(200).json({
      message: "Majors retrieved successfully",
      majors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve majors",
      error: error.message,
    });
  }
};

const createMajor = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "Name and category are required",
      });
    }

    const major = await Major.create({
      name,
      description,
      category,
    });

    res.status(201).json({
      message: "Major created successfully",
      major,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create major",
      error: error.message,
    });
  }
};

const updateMajor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;

    const major = await Major.findByPk(id);

    if (!major) {
      return res.status(404).json({
        message: "Major not found",
      });
    }

    await major.update({
      name,
      description,
      category,
    });

    res.status(200).json({
      message: "Major updated successfully",
      major,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update major",
      error: error.message,
    });
  }
};

const deleteMajor = async (req, res) => {
  try {
    const { id } = req.params;

    const major = await Major.findByPk(id);

    if (!major) {
      return res.status(404).json({
        message: "Major not found",
      });
    }

    await major.destroy();

    res.status(200).json({
      message: "Major deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete major",
      error: error.message,
    });
  }
};

module.exports = {
  getMajors,
  createMajor,
  updateMajor,
  deleteMajor,
};