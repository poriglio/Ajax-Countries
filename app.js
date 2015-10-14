var countries = require("./models/countries.json")
var bodyParser = require("body-parser")
var express = require("express")
var db = require("mongodb")

var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/countries")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

// ROUTES

app.get("/",function(request,response){
	response.sendFile("/html/index.html",{root:"./public"})
})

app.get("/countries",function(request,response){
	response.send(countries)
})

// SET UP SERVER
var port = 3000

app.listen(port,function(){
	console.log("Server running on port " + port)
})