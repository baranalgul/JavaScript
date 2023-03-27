/* 

Conditional Statements

It allows us to run different results or functions for different situations.

Method 1(if-else and if, else if, else)

-----------------------
if(condition){
     code block that will run if condition is true 
} else{
    code block that will run if condition is false
}
-----------------------

-----------------------
if(condition1) {
    code block that will run if condition1 is true
} elseif(condition 2){
    code block that will run if condition2 is true
} else {
    code block that will run if condition is false
}
-----------------------

*/

let num = 3

if(num > 0 ) {
    console.log(`${num} is positive number`)
} else {
    console.log(`${num} is negative or 0`)
}



let userName = prompt('Your username'),
    password = prompt('Your password')
   
if(userName == 'Hakan' && password == 123) {
    console.log(`Welcome ${userName}`)
} else if(userName == 'Hayko' && password == 456) {
    console.log(`Welcome ${userName}`)
} else {
    console.log('Your username or password wrong.')
}

/* 

switch(condition) {
    case 'value1':
        code block to run
        break
    case 'value2':
        code block to run
        break
    default:
        code block to run
        break
} 

*/

let weather = 'Cloudy'

switch(weather) {
    case 'Cloudy':
        console.log('Today is weather cloudy')
        break
    case 'rainy':
        console.log('Today is weather rainy')
        break
    case 'sunny': 
        console.log('Today is weather sunny')
        break
    default:
        console.log('Dont leave the house. there is a storm')
}

let time = new Date(),
    year = time.getFullYear(),
    bornYear = prompt('Enter your birth year'),
    age = year - bornYear

switch(age >= 18) {
    case true:
        console.log(`You are ${age}. You have get a driver's license.`)
        break
    default:
        console.log(`You are ${age}. You have ${18-age} years to get a driver's license.`)
        break
}

/* 

Ternary Operator

condition 
    ?  This block of code runs if the condition is true.
    :  This block of code runs if the condition is false.

*/

age > 18
    ? console.log(`You are ${age}. You have get a driver's license.`)
    : console.log(`You are ${age}. You have ${18-age} years to get a driver's license.`)