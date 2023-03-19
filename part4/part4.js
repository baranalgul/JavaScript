/* 

Math Objects

*/

const PI = Math.PI //It is the default method of the PI math function.

console.log(PI)

/* Rounding Methods */
//round() -> Rounds decimal numbers to the nearest number.

console.log(Math.round(Math.PI)) // Writes 3 to the screen.
console.log(Math.round(9.56)) //Writes 10 to the screen.

//ceil() -> It only rounds up.

console.log(Math.ceil(9.12)) // Writes 10 to the screen.

//floor() -> It only rounds down.

console.log(Math.floor(9.9526)) // Writes 9 to the screen.

//min() and max() methods

console.log(Math.min(7, 5, 93, 1, -5)) // Writes -5 to the screen.
console.log(Math.max(7, 5, 93, 1, -5)) //Writes 93 to the screen.

//random() -> Generates numbers between 0 and 1.

console.log(Math.random())

let num1 = Math.floor((Math.random()*49))+1,
    num2 = Math.floor((Math.random()*49))+1,
    num3 = Math.floor((Math.random()*49))+1,
    num4 = Math.floor((Math.random()*49))+1,
    num5 = Math.floor((Math.random()*49))+1, 
    num6 = Math.floor((Math.random()*49))+1

console.log(num1, num2, num3, num4, num5, num6)