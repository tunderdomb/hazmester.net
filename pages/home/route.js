var salamandra = require("salamandra")

module.exports = function( app ){
  app.get("/", salamandra.render("home"))
}
