const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({


name: {type: String,
    require: false


},
imgUrl: {

    type: String,
    require: false
}



})
const Cards = mongoose.model('Cards', CardSchema);
module.exports = Cards;
