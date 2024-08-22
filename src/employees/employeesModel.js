// Model for employees
const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Employees = mongoose.model('Employees', EmployeesSchema);

module.exports = Employees;
