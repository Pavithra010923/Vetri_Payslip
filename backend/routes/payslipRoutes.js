import express from "express";
import {
  createPayslip,
  getPayslipsByEmployee
} from "../controllers/payslipController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Admin only
router.post(
  "/create",
  authMiddleware,
  createPayslip
);

// Employee + Admin
router.get(
  "/:employeeId",
  authMiddleware,
  getPayslipsByEmployee
);

export default router;
