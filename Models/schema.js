const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  Movie_Id: { type: Number, required: true },  
  MovieName: { type: String, required: true },   
  Date : String,
  Director : String,
  Rating : Number,
  Comments: Array,
  UserName: String,
  Password : String,
})

module.exports = mongoose.model("Movie", MovieSchema);