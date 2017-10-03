const express = require("express");
const meth = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(meth("_method"));
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");
console.log(`Routes ${routes}`)
app.use("/",routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function() {
	console.log(`app listening on port ${PORT}`)
});