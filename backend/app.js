import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import payslipRoutes from "./routes/payslipRoutes.js";

const app = express();

app.use(cors({
  origin: " "https://your-frontend.vercel.app"",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/payslip", payslipRoutes);

export default app;
