const mongoose = require("mongoose");
// Define the trip schema
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});
const Trip = mongoose.model("trips", tripSchema);

const blogsSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  title: { type: String, required: true, index: true },
  date: { type: String, required: true },
  excerpt: { type: String, required: true },
});

const Blog = mongoose.model("blogs", blogsSchema);

const foodsSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});
const Food = mongoose.model("foods", foodsSchema);

const roomsSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  room: { type: String, required: true, index: true },
  rate: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});
const Room = mongoose.model("rooms", roomsSchema);

module.exports = { Trip, Blog, Food, Room };