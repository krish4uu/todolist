//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();
let items = ["buy food", "cook food", "eat food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

let day= date.getDate();
res.render("list",{listItems: day, newListItems: items});
});

app.post("/", function(req, res){
let item = req.body.newItem
if(req.body.list === "work"){
  workItems.push(item);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/");
}

console.log(req.body);

});

app.get("/work", function(req, res){
  res.render("list", {listItems: "work Items", newListItems: workItems});
});
 app.get("/about", function(req, res){
   res.render("about");
 });


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
