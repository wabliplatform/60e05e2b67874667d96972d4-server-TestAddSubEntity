
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
Underscoreid:String , 


cardName:String , 


cardDescription:String 



})

module.exports = {
  Card : mongoose.model('card', cardSchema),
}

