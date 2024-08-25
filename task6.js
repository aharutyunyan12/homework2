//task6

const { log } = require("console");


let a = {
  valueOf: function() {
      return 'hello';
  }
};
let b = {
  valueOf: function() {
      return 3;
  }
};
let c = {
  valueOf: function() {
      return new Number(3);
  }
};
let d = {
  toString: function() {
      return 123;
  }
};
let e = {
  toString: function() {
      return new Number(3);
  }
};


console.log(null + undefined) //NaN
console.log(null + true) //1
console.log(null + 3) //3
console.log(null + NaN) // NaN
console.log(null + 'hello') // 'nullhello'
//console.log(null + a + b + c + d + e + f) 
console.log(undefined + true) // NaN
console.log(undefined + false) //NaN
console.log(undefined + 5) //NaN
console.log(undefined + NaN) //NaN
console.log(undefined + 'hello') //'undefinedhello'
//console.log(undefined + a + b + c + d + e + f)
console.log(true + false) //1
console.log(true + 2) //3
console.log(true + NaN) //NaN
console.log(true + 'hello') // 'truehello'
//console.log(true + a + b + c + d + e + f)
console.log(false + 4) //4
console.log(false + NaN) //NaN
console.log(false + 'hello') // 'falsehello'
//console.log(false + a + b + c + d + e + f) 
console.log(5 + 3) //8
console.log(5 + NaN) //NaN
console.log(5 + 'hello') //'5hello'
//console.log(5 + a + b + c + d + e + f)
console.log('hello' + NaN) // 'helloNaN'
//console.log('hello' + a + b + c + d + e + f)

console.log(-null) //-0
console.log(-undefined) // NaN
console.log(-true) //-1
console.log(-false) //-0
console.log(-5) //-5
console.log(-'hello') //NaN
console.log(-'234') //-234
console.log(-'234.32e3') //-24320
console.log(-new Number(NaN)) //NaN
console.log(-new String('hello')) //NaN
console.log(-(/google.com/)) //NaN
console.log(-([])) //-0
console.log(-([2])) //-2
console.log(-([2, 3])) //NaN
console.log(-(function() { })) //-0 NaN
console.log(-(a)) //NaN

console.log(234 % 2) //0
console.log(234 % 3) //0
console.log(23.23 % 2 === 1.23) // false
console.log(234.23 % 2.223) // 0.815

console.log(1 ? 234 : 32) // 234

console.log(null instanceof Object) //false
console.log(true instanceof Boolean) //false
console.log(false instanceof Boolean) //false
console.log(1 instanceof Number) //false
console.log(NaN instanceof Number) //false
console.log('hello' instanceof String) //false
console.log((function () { }) instanceof Function) //true
console.log((function () { }) instanceof Object) //true
console.log(a instanceof Object) //true
console.log(new Number(1) instanceof Number) //true
console.log(new Number(NaN) instanceof Object) //true
console/log(/hello/img instanceof RegExp)
console.log(/hello/img instanceof Function)
console.log(/hello/img instanceof Object)
