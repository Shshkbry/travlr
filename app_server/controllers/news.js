var fs = require("fs");
var pageNews = JSON.parse(fs.readFileSync("./data/news.json", "utf-8"));

/* GET News page */
const news = (req, res) => {
  res.render("news", { title: "Travlr Getaways", pageNews });
};

module.exports = {
  news,
};