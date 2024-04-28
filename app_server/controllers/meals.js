var fs = require("fs");
var foods = JSON.parse(fs.readFileSync("./data/foods.json", "utf-8"));

/* GET Meals page */
const meals = (req, res) => {
  res.render("meals", { title: "Travlr Getaways", foods });
};

module.exports = {
  meals,
};