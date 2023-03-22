/*  

Date Methods

1- getFullYear() ->  Provides year information.
2- getMonth() -> Gives the moon Information. (0-11)
3- getDate() -> It gives information of the day.(1-31)
4- getHours() -> It gives time information. (0-23)
5- getMinutes() -> It gives minute information.(0-59)
6- getSeconds() -> It gives the seconds information.(0-59)
7- getMiliSeconds() -> Returns milliseconds. (0-999)
8- getTime() -> It gives the time information. (miliseconds since January 1, 1970)
9- getDay() -> Returns the day of the week. (0-6)

In order to use the Date methods, the Date() class must be created.

let Date = new Date()

*/

let Time = new Date() // When the screen is opened, it allows the computer to assign all the time information to the Date variable.

console.log(Time.getFullYear()) // Writes 2023 to the screen.

let bornYear = prompt('Enter your year of birth ')
let year1 = Time.getFullYear()
let age = year1 - bornYear

console.log(age)

// Ex: Easily Readable Date Format(21 March 2023, Tuesday 20:47:00)

let year2 = Time.getFullYear(),
    month = Time.getMonth(),
    date = Time.getDate(),
    hour = Time.getHours(),
    minute = Time.getMinutes(),
    second = Time.getSeconds(),
    day = Time.getDay()

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let time1 = `${date} ${months[month]} ${year2}, ${days[day]} ${hour}:${minute}:${second}`

console.log(time1)