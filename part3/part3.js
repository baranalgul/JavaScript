/* 

Variables
- It is a container of data.
- Var, let and const keywords are used when defining variables.
   let -> It is used to define a value whose value may change at different times.
   const -> Used if the value will never change.


Spelling Rules of Variables

a- They certainly can't start with numbers.
b- They cannot contain any other special characters except $ and _.
c- It is usually written as camelCase.
d- let, const, and var must be written before the variable name.
e- It is recommended not to use Turkish characters.

*/

let name = "Baran"
let surname = "Algül"
let age1 = 25
let country = "Turkey"
let city = "Istanbul"
let job = "Student"

    console.log(name) //Writes Baran to the screen
    console.log(surname) //Writes Algül to the screen
    console.log(age1) //Writes 25 to the screen
    console.log(country) //Writes Turkey to the screen
    console.log(city) //Writes Istanbul to the screen
    console.log(job) //Writes student to the screen

let bornDate = 1998,
    now = 2023,
    age2 = now-bornDate
    console.log(age2) //Writes 25 to the screen