const { Router } = require('express');
const PackageController = require('../controllers/PackageController');

const packageController = new PackageController();

const packageRoutes = Router();

packageRoutes.post('/create', packageController.create);
packageRoutes.delete('/delete', packageController.delete);
packageRoutes.put('/update/:id', packageController.update);
packageRoutes.post('/', packageController.findMany);
packageRoutes.get('/:id', packageController.findOne);
packageRoutes.post(
  '/findManyDeliveryUser',
  packageController.findManyDeliveryUsers,
);

module.exports = packageRoutes;