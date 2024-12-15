const mongoose = require('mongoose');
const { model } = mongoose;
const {OrdersSchema} = require('../schemas/OrderSchema');

// Create the Order model
const OrderModel = new model('Order', OrdersSchema);

// Export the model
module.exports = {OrderModel};
