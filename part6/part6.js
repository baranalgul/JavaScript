/* 

Comparison Operators

Used to compare multiple values.

== -> It just means equal. Checks if the value is equal. (Ex: '5' == 5 -> true)
=== -> It means equivalence. Checks if the value and data type are equal. (Ex: '5' == 5 -> false)
!= -> It means not equal. It just looks at the values.
!== -> It means it's not equivalent.
> ->  It means big.
< -> It means small.
>= -> It means greater than or equal to.
<= -> It means less than or equal to.

*/

let name1 = 'Hakan'
let name2 = 'Mehmet'
console.log(name1 == name2) // Writes false to the screen.

/* 

Logical Operators

&& / AND -> It means and.
|| / OR -> It means or.
! -> It means negativity.

*/

let username = 'Hakan'
let password = 123
if(username === 'Hakan' && password === 123){
    console.log('username and password correct.')
} else {
    console.log('username and password wrong.')
} // Writes if block

/* 

Increment Decrease Operators (++) (--)

*/

let number1 = 0
//pre-increment
console.log(++number1) // Writes 1 to the screen.
console.log(number1) // Writes 1 to the screen.

//post-increment
let number2 = 0
console.log(number2++) // Writes 0 to the screen.
console.log(number2)  // Writes 1 to the screen.


let number3 = 0
console.log(--number3) // Writes -1 to the screen.
console.log(number3) // Writes -1 to the screen.

let number4 = 0
console.log(number4--) // Writes 0 to the screen.
console.log(number4) // Writes -1 to the screen.