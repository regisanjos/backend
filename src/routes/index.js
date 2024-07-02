const { Router } = require('express');

const deliverymanRoutes = require('./DeliverymanRoutes');
const adminRoutes = require('./AdminRoutes');
const userRoutes = require('./UserRoutes');
const packageRoutes = require('./PackageRoutes');

const routes = Router();

routes.use('/deliveryman', deliverymanRoutes);
routes.use('/admin', adminRoutes);
routes.use('/user', userRoutes);
routes.use('/package', packageRoutes);

module.exports = routes;