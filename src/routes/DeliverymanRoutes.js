const { Router } = require('express');

const DeliverymanController = require('../controllers/DeliverymanController');

const deliverymanRoutes = Router();

const deliverymanController = new DeliverymanController();

deliverymanRoutes.post('/create', deliverymanController.create);
deliverymanRoutes.post('/login', deliverymanController.login);
deliverymanRoutes.delete('/delete', deliverymanController.delete);
deliverymanRoutes.put('/update/:id', deliverymanController.update);
deliverymanRoutes.get('/', deliverymanController.findMany);
deliverymanRoutes.get('/:id', deliverymanController.findOne);
deliverymanRoutes.get(
  '/findManyDeliveryUser',
  deliverymanController.findManyPackage,
);

module.exports = deliverymanRoutes;