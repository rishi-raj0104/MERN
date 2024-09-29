// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

//Server instantiate
const express = require("express");
const app = express();

// used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(3000,()=>{
    console.log("Server Started at port no. 3000");
});

//Route
app.get('/',(request,response)=>{
    response.send("hello ji");
})
//url: http://localhost:3000/api/cars
//postman request
//{
//    "name":"Scorpio"
//    "brand":"mahindra"
//}
//
//Navigate to the Headers tab.
//Ensure you have the following header:
//Key: Content-Type
//Value: application/json
//
//node server.js
app.post("/api/cars", (req, res) => {
    console.log(req.body); // Log the request body
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted");
});
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/CARS",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connection established");
})
.catch((error)=>console.log(error));
  