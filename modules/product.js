const mongoose = require('mongoose');

const product = new mongoose.Schema({

name: String,
description: String,
price: String,
category: String

})

var Products = mongoose.model('Products',product);

module.exports = Products