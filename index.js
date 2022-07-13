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