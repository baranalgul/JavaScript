/* 

Functions ()

1- It is used to perform a specific task.
2- It can be redesigned.
3- It is created with the function keyword It takes parameters with ().
4- Parameters can be passed in parentheses.
5- Functions return values.
6- The concept of scope applies here as well.
8- For the function to work, the corresponding function must be called.
9- The global value works in local, but the local value does not work in the global.

function name () {
    code block to run 
}

*/

function info() {
    console.log('Your application has been received')
}

info ()

function message () {
    let msg ='Your application has been received'
    alert(msg)
}

message()

// console.log(msg)  // msg won't work because it's local scope

function alert() {
    let info = 'Your application has been taken for granted'
    console.log(info)
}

let name = 'Kaan'

function id() {
    console.log(name)
}

id()

function lastName () {
    let lastName = 'Pamukcu'
    return lastName
}

console.log(lastName())

function total(num1, num2) {
    return num1 + num2
    
}

//total(10, 82)

console.log(total(10, 82))

let name1 = prompt('Enter your name')
let surname = prompt('Enter your  surname')

function fullName(name, surname) {  
    let fullName = `${name} ${surname}`
    return fullName
}

console.log(fullName(name1, surname))

/* 

Arrow Functions
They are defined to the variable

*/

let hello = (name) => {
    return `Hello, ${name} Welcome`
}

console.log(hello('Baran'))