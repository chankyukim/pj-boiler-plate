const express = require('express');
const verifyJWT = require('../../middleware/verifyJWT');
const router = express.Router();
const employeesController = require('../../controller/employee/employeesController');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');

router.use(verifyJWT);
router
  .route('/') //
  .get(employeesController.getAllEmployees)
  .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createEmployee)
  .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateEmployee)
  .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);

router.get('/:id', employeesController.getEmployee);

module.exports = router;
