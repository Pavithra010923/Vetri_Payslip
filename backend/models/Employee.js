import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true },
  name: String,
  email: String
});

export default mongoose.model("Employee", employeeSchema);
