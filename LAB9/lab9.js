const express = require("express");
const app = express();
var fs=require('fs')
var path=require('path')
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
//app.engine('html', require('ejs').renderFile);

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


app.post("/", function (req, res) {

      let sentData = req.body;
      console.log(sentData);
      let data = fs.readFileSync('./data.json', 'utf-8');
      data = JSON.parse(data.toString());
      let content =  {"name":`${sentData.name}`, "price":`${sentData.price}`,"description":`${sentData.description}`,"category":`${sentData.category}`,"calories":`${sentData.calories}`};

      data.push(content);

      let newData = JSON.stringify(data);
      console.log(newData);

      fs.writeFileSync("./data.json", newData, err=>{
         if(err) {
            console.log(err);
         }
      });
      res.send(newData);
   
})
app.get("/data", function (req, res){
   fs.readFile('./data.json', 'utf8', function (err, data) {
             if (err) throw err;
             obj = JSON.parse(data);
             console.log("The item name is:", obj[0].name)
             res.send(JSON.stringify(obj));
       });

})

app.get("/home", function (req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile(path.join(__dirname,'lab8.html'),'utf-8',(err,data)=>{
      if(err)
      throw err
      res.end(data)

  })

})
app.get("/products", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'products.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)
 })
})


app.get("/register", function (req, res){
   res.writeHead(200,{'Content-Type':'text/html'})
   fs.readFile(path.join(__dirname,'register.html'),'utf-8',(err,data)=>{
     if(err)
     throw err
     res.end(data)
 })
})


app.listen(3000, function () {
   console.log("Server is running on localhost:3000");
});