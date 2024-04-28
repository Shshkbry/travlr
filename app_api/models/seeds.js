const Mongoose = require("./db");
const { Trip, Blog, Food, Room } = require("./travlr");
var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));
var foods = JSON.parse(fs.readFileSync("./data/foods.json", "utf-8"));
var rooms = JSON.parse(fs.readFileSync("./data/rooms.json", "utf-8"));
var blogs = JSON.parse(fs.readFileSync("./data/blogs.json", "utf-8"));

// Trip, Blogs, Food, Room
const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  await Blog.deleteMany({});
  await Blog.insertMany(blogs);
  await Food.deleteMany({});
  await Food.insertMany(foods);
  await Room.deleteMany({});
  await Room.insertMany(rooms);
};

seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0);
});