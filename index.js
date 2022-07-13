console.log(2+4)

// whenever you import library 
// use require
var _ = require('lodash')

var a = _.chunk(['a', 'b', 'c', 'd'], 2);

console.log(a)



// Importing files
var variables = require('./vars')
console.log(variables)
console.log(variables.name)

// importing function
variables.printName()


// Run our server
const express = require('express')
const app = express()

// req = request
// res = response
app.get("/",(req,res)=>{ res.send('<h1> Hi Mark </h1>') })
app.get("/about",(req,res)=>{ res.send('<h1> About page </h1>') })


// port
app.listen(3000,()=>{console.log("Server is running on port 3000")})