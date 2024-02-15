const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  MovieName: { type: String, required: true },
  ImgLink:{type:String,required:true},
  Date : { type: String },
  Director : { type: String },
  Rating : { type: String, required: true },
  Comments: Array,
  
})

module.exports = mongoose.model("Movie", MovieSchema);