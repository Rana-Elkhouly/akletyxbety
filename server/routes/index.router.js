const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlProduct = require('../controllers/product.controller');
const ctrlOrder = require('../controllers/order.controller');

const jwtHelper = require('../config/jwtHelper');
const adminHelper = require('../config/adminHelper');
const upload = require('../config/storage');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/products', ctrlProduct.getProduct)
router.get('/products/:id', ctrlProduct.getProductId)
router.post('/products', ctrlProduct.postProduct)
router.put('/products/:id', ctrlProduct.editProduct)
router.delete('/products/:id', ctrlProduct.deleteProduct)

router.get('/dashboard', [jwtHelper.verifyJwtToken, adminHelper.admin], ctrlUser.getProducts)

// Cart
router.post("/order", jwtHelper.verifyJwtToken, ctrlOrder.createOrder);
router.get("/order", ctrlOrder.getOrder);
router.delete("/empty-cart", ctrlOrder.emptyCart);

module.exports = router;