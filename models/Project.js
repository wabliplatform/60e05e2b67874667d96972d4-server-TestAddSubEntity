
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


projectName:String , 


projectDescription:String , 




 projectEntity: [ 
  {
    type: Schema.Types.ObjectId,
    ref:'card'
  }

]



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

