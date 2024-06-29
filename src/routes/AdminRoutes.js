const { Router } = require('express');

const AdminController = require('../controller/AdminController');

const adminRoutes = Router();

const adminController = new AdminController();

adminRoutes.post('/create', adminController.create);
adminRoutes.post('/login', adminController.login);
adminRoutes.delete('/delete', adminController.delete);
adminRoutes.put('/update', adminController.update);

module.exports = adminRoutes;