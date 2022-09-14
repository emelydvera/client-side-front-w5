/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const getProducts = require('./get-products');
const getProductList= require ('./get-productList');
/**
 * Routers
 */
router.use('/get-products', getProducts);
router.use('/get-productList', getProductList)


/**
 * Expose API router
 */
module.exports = router;
