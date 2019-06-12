const path = require("path");

module.exports = function (app) {

  app.get("/portfolio", function (req, res) {
    console.log("Get me my portfolio");
    res.render("portfolio");
  });

  // If no matching route is found default to home
  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  app.get("*", function (req, res) {
    console.log("Root route hit");
    res.render("index");
  });
};
