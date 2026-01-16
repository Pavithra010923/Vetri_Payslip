import Payslip from "../models/Payslip.js";
import Employee from "../models/Employee.js";

export const createPayslip = async (req, res) => {
  try {
    const {
      employeeId,
      payPeriod,
      paidDays,
      lossOfPayDays,
      paymentDate,
      income,
      tax
    } = req.body;

    const employee = await Employee.findOne({ employeeId });
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    const netSalary =
      Number(income.basic || 0) +
      Number(income.incentive || 0) -
      Number(tax || 0);

    const payslip = await Payslip.create({
      employee: employee._id,
      payPeriod,
      paidDays,
      lossOfPayDays,
      paymentDate,
      income,
      tax,
      netSalary
    });

    res.status(201).json(payslip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPayslipsByEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({
      employeeId: req.params.employeeId
    });

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    const payslips = await Payslip.find({
      employee: employee._id
    }).populate("employee");

    res.json(payslips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
