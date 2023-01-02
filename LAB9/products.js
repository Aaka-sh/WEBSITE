const express = require("express");
const app = express();
var fs=require('fs')
var path=require('path')

const data = require("./data.json");
app.use(express.static("public"));
let nd = {
   name:"Peri Peri Fries",
   price:"130",
   description:"Fried Potatoes served with peri peri masala.",
   spice:"High",
   calories:"350",
   ftype:"Appetiser"
};
data.push(nd);

app.use(function (req, res, next) {

   // Website you wish to allow to connect

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
}); 


app.get("/", function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile(path.join(__dirname,'Deleazzy.html'),'utf-8',(err,data)=>{
      if(err)
      throw err
      res.end(data)

  })

})
app.get("/json_data", function (req, res) {
   fs.writeFileSync("./data.json", JSON.stringify(data), err => {
    
      // Checking for errors
     if (err) throw err; 
     console.log("Done writing"); // Success
  });
   fs.readFile('./data.json', 'utf8', function (err, data) {
       if (err) throw err;
       console.log(data); 
       obj = JSON.parse(data);
       console.log("The appetiser is:", obj[0].name)
       res.send(JSON.stringify(obj));
     });
   
})
app.get("/menu", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'lab7.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)

 })

})
app.get("/reg", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'register.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)

 })

})
app.listen(3000, function () {
   console.log("Server is running on localhost3000");
});