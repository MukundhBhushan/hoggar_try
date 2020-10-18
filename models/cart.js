const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    course: String,
    name: String,
    price: String

})

const carts = mongoose.model('carts', cartSchema);

module.exports = {
    carts
};