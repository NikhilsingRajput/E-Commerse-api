const express = require('express');
const { getallproducts, retriveProduct, createProduct, updateProduct, DeleteProduct } = require('./controller');
const router = express.Router();

router.get('/',(req,res)=>{res.send('Welcome to E-Commerse api service')})

router.get('/products',getallproducts)

router.post('/products/:id',retriveProduct)

router.post('/products' , createProduct)

router.patch('/products/:id',updateProduct)

router.delete('/products/:id',DeleteProduct)

module.exports = router