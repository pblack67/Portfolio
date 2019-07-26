let projects = require("../models/projects.js");

module.exports = function (app) {

  app.get("/portfolio", function (req, res) {
    res.render("portfolio", {projects});
  });

  app.get("/technology", function (req, res) {
    res.render("technology", {projects});
  });

  // If no matching route is found default to home
  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  app.get("*", function (req, res) {
    res.render("index");
  });
};
