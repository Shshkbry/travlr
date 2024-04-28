var fs = require("fs");
var blogs = JSON.parse(fs.readFileSync("./data/blogs.json", "utf-8"));
/* GET Home page */
const index = (req, res) => {
  res.render("index", { title: "Travlr Getaways", blogs });
};

module.exports = {
  index,
};