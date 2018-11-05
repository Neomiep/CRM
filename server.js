const express = require('express')
const app = express()
var fs = require('fs');
let Client = require('./Models/Client')
const bodyParser = require("body-parser")
const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/clientDB", function(){
    console.log("Connected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static("public"))
app.use(express.static("node_modules"))


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

// const clients = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf-8'));
// async function loadClients() {
//   try {
//     await Client.insertMany(clients);
//     console.log('Done!');
//     process.exit();
//   } catch(e) {
//     console.log(e);
//     process.exit();
//   }
// };
// loadClients()

let clientApi = require("./Api/clientApi") 
app.use("/clientData", clientApi)

app.listen(4000)

