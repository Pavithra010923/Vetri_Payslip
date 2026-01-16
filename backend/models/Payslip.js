import mongoose from "mongoose";

const payslipSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  },
  payPeriod: String,
  paidDays: Number,
  lossOfPayDays: Number,
  paymentDate: Date,
  income: {
    basic: Number,
    incentive: Number
  },
  tax: Number,
  netSalary: Number
});

export default mongoose.model("Payslip", payslipSchema);
