console.log('10' == 10) // Writes true to the screen.
console.log('10' === 10) // Writes false to the screen.

console.log(4 > 3) //Writes true to the screen.
console.log(4 < 3) //Writes false to the screen.
console.log(4 == 4) //Writes true to the screen.
console.log(4 === 4) //Writes true to the screen.
console.log(4 != 4) //Writes false to the screen.
console.log(4 != '4') //Writes false to the screen.
console.log(4 == '4') //Writes true to the screen.
console.log(4 === '4') //Writes false to the screen.
console.log(4 > 3 && 10 < 12 ) //Writes true to the screen.
console.log(4 > 3 && 10 > 12 ) //Writes false to the screen.
console.log(4 > 3 || 10 < 12 ) //Writes true to the screen.
console.log(4 > 3 || 10 > 12 ) //Writes true to the screen.
console.log(!(4 > 3)) //Writes false to the screen.
console.log(!(4 < 3)) //Writes true to the screen.
console.log(!(false)) //Writes true to the screen.

let floorLength = prompt('Enter the base length')
let height = prompt('Enter height')
let triangleArea = (0.5*floorLength*height)
console.log(triangleArea)

let a = Number(prompt('Enter the 1st side length'))
let b = Number(prompt('Enter the 2nd side length'))
let c = Number(prompt('Enter the 3rd side length'))
let trianglePerimeter = a + b + c
console.log(trianglePerimeter)

let name = prompt('Enter your name')
if(name.length > 7){
    console.log('Your name is long')
} else {
    console.log('Your name is short')
}

let age = prompt('Enter your age')
if(age >= 18) {
    console.log(`You are ${age}. You can get a driver's license`)
} else {
    console.log(`You are ${age}. You have ${18-age} years to get your driver's license`)
}


