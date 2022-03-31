const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(authAdmin,productCtrl.createProduct)


router.route('/products/:id')
    .delete(authAdmin, productCtrl.deleteProduct)
    .put(authAdmin, productCtrl.updateProduct)



module.exports = router