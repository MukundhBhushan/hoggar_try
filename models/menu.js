const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    menuid: {
        type: String,
        required: true,
    },
    items:[{ 
        course: String,
        name: String,
        price: Number,
    }]
})

const menus = mongoose.model('menus', menuSchema);

module.exports = {
    menus
};
