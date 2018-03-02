var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
// var asyncMiddleware = require('express-async-handler'),
// var productCtrl = require('../controllers/ProductController');

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//-------------------------------Product Routes-----------------------------------
// router.get('/product/getProducts', asyncMiddleware(productCtrl.getProducts));
// router.get('/product/getProduct/:productId', asyncMiddleware(productCtrl.getProduct));
// router.get(
//   '/product/getProductsBelowPrice/:price',
//   asyncMiddleware(productCtrl.getProductsBelowPrice)
// );
// router.post('/product/createProduct', asyncMiddleware(productCtrl.createProduct));
// router.patch('/product/updateProduct/:productId', asyncMiddleware(productCtrl.updateProduct));
// router.delete('/product/deleteProduct/:productId', asyncMiddleware(productCtrl.deleteProduct));


'use strict';

module.exports = function(app) {
	app.route('/StoreC4')
		.get(function (request, response) {
			response.json([{ name: 'Beverages' }, { name: 'Condiments' }]);
		});
};
