import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import payslipRoutes from "./routes/payslipRoutes.js";

const app = express();

import cors from "cors";

app.use(cors({
  origin: " http://localhost:5173/",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/payslip", payslipRoutes);

export default app;
