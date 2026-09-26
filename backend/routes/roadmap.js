const express = require("express");

const authenticateToken = require("../middleware/auth.middleware");
const authorizeRole = require("../middleware/role-validation");

const {
  getRoadmaps,
  createRoadmap,
  updateRoadmap,
  deleteRoadmap,
} = require("../controllers/roadmap.controller");

const router = express.Router();

router.get(
  "/",
  authenticateToken,
  getRoadmaps
);

router.post(
  "/",
  authenticateToken,
  authorizeRole("admin"),
  createRoadmap
);

router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  updateRoadmap
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  deleteRoadmap
);

module.exports = router;