const mongoose = require("mongoose");


const CardSchema = mongoose.Schema({


name: {type: String,
    require: true


},
age: {type: Number,
    require: true,

},
image: {

    type:String,
    require: true,
}




})
const Cards = mongoose.model('Cards', CardSchema);
module.exports = Cards;
