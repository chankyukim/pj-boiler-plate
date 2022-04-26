const Employee = require('../../models/Employee');

const getAllEmployees = async (req, res) => {
  const employee = await Employee.find();
  if (!employee) return res.status(204).json({ message: 'No Employees Found' });
  res.json(employee);
};

const createEmployee = async (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname)
    return res.status(400).json({ message: 'First and Last name are required.' });

  try {
    const result = await Employee.create({
      firstname,
      lastname,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
};

const updateEmployee = async (req, res) => {
  const { id, firstname, lastname } = req.body;
  if (!id) return res.status(400).json({ message: 'ID parameter is required.' });

  const employee = await Employee.findOne({ _id: id }).exec();
  if (!employee) return res.status(204).json({ message: `No employee matches ID ${id}.` });
  if (firstname) employee.firstname = firstname;
  if (lastname) employee.lastname = lastname;

  const result = await employee.save();
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: 'ID parameter is required.' });

  const employee = Employee.findOne({ _id: id }).exec();
  if (!employee) return res.status(204).json({ message: `No employee matches ID ${id}` });

  res.json(employee);
};

const getEmployee = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: id }).exec();

  if (!employee) {
    return res.status(204).json({
      message: `No employee matches ID ${id}`,
    });
  }

  res.json(employee);
};

module.exports = { getAllEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee };
