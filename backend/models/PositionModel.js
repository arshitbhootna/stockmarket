const mongoose = require('mongoose');
const { model } = mongoose;
const {positionSchema} = require('../schemas/PositionSchema');

// Create the Position model
const PositionModel = new model('Position', positionSchema);

// Export the model
module.exports = {PositionModel};
