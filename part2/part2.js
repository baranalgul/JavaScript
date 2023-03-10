/* 
    
typeof() -> It is a predefined function. Returns the data type of a value or variable.

DATA TYPES

Primitive Data Types

1 - Integer -> A data type that represents integers. (Outputs a number) 

2- Float(Double) -> A data type that represents decimal numbers. (Outputs a number)

3- String -> Expresses textual values. Used between "" or "

4- Boolean -> It is a logical data type. (True or false)

5- Undefined -> Returns undefined to the screen when no value assignment is made.

6- Null -> It allows to assign an empty value to the variable.

Non-Primitive Data Types

a- Objects 

b-Array

c-Functions

*/

let value1= "Hello. Im learning Javascript"
console.log(typeof(value1)) // Writes a string to the screen

let value2 = 5
console.log(typeof(value2)) // Writes a number to the screen

let name1 = "Kaan"
let name2 = "Hakan"

console.log(name1 == name2) //Writes a false to the screen

let number1 = 3
let number2 = "3"

console.log(number1 == number2) //Writes a true to the screen
console.log(number1 === number2) //Writes a false to the screen. Because the data types are different

let number3 = 4.5
console.log(typeof(number3)) // Writes a number to the screen. (Float Data Types)