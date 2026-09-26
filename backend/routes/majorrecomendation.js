const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getRecommendations,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
} = require("../controllers/majorrecommendation.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getRecommendations
);

router.post(
  "/",
  authenticateToken,
  createRecommendation
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateRecommendation
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteRecommendation
);

module.exports = router;