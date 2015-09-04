var salamandra = require("salamandra")
var app = salamandra.express()

app.use("/static", salamandra.static())

salamandra.livereload.inject(app)

require("./pages/home/route")(app)

app.use(function( err, req, res, next ){
  salamandra.render("404", err).call(this, req, res, next)
})

app.listen(salamandra.config.PORT||8000, function(  ){
  console.log("(%s) app listening on (%s)", salamandra.config.env, salamandra.config.PORT||8000)
  salamandra.livereload.start(app)
})
