const allProducts = require('./products/getAllProducts');
const welcomePage = require('./welcome-page/welcomePage');



module.exports = {
    getAllProducts: allProducts.getAllProducts,
    welcomePage
}