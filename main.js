// VARIABLE
//keywords: let, var,  and const

//2.var keyword (1995-ES5)

var intValue=10;
console.log(intValue); //10


console.log(intValue); //throws exception("intValue" not defined)
var intValue=10;
console.log(intValue);

//Note: unlike ES6; ES5 cannot read code of lines ahead of current line.
//therefore; we get error "undefined" instead of "cannot access before initialization"
