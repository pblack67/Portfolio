const path = require("path");

module.exports = function (app) {

  app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  // If no matching route is found default to home
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
