const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  MovieName: { type: String, required: true },
  ImgLink:{type:String,required:true},
  Date : { type: String },
  Director : { type: String },
  Rating : { type: Number, required: true },
  Comments:Array,
  User: { type: String },
  
})

module.exports = mongoose.model("Movie", MovieSchema);