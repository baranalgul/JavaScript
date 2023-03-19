/* 
String expression concatenation methods
*/

//Old Way -> with +

let value1 = "JavaScript",
    value2 = "Php",
    value3 = "Html",
    value4 = "Css"

console.log('Languages I know:' + ' ' + value1 + '-' + value2 + '-' + value3 + '-' + value4)

// New Way -> Backtick `` ${variableName}

console.log(`Languages I know: ${value1} - ${value2} - ${value3} - ${value4}`)

let name = prompt("Your Name"),
    surname = prompt("Your Surname")

document.write(`Welcome ${name} ${surname},`)

/* String Methods */

//length -> Gets the length of the string expression. Including spaces

let nameSurname = "Baran Algül"

console.log(nameSurname.length) //Writes 11 to the screen.

//[index] It is used to access any value inside a set of variables. Starts from 0

let info = ["Kaan", "Pamukcu", "Programmer", "Acibadem & Ari Bilgi"]

console.log(info.length) // Writes 4 to the screen.
console.log(info[1])   // Writes Pamukcu to the screen.
console.log(info[1].length) // Writes 7 to the screen.

//substr(x, y) -> It is used to print or capture an abbreviation or a specific range. Where x is the starting index, y; Specifies how many characters to take.

let article = "JAVASCRIPT Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam consectetur ut provident magni ullam magnam ad exercitationem! Adipisci vel magni ducimus eaque possimus at reprehenderit iste doloribus dolorem iure modi enim voluptatibus voluptates JAVASCRIPT recusandae error facilis harum esse molestias, odio atque ratione illum alias, culpa natus! Ad doloremque cupiditate nostrum harum non, quae aut fugiat eius expedita omnis rem accusamus temporibus facere aperiam velit necessitatibus delectus quidem. Inventore tenetur, debitis eligendi delectus quo consequuntur similique tempore reprehenderit corrupti quisquam. Omnis expedita modi dolore in quisquam maiores aliquid sequi autem. Quae ipsum praesentium id quam eveniet quasi perferendis numquam voluptatem exercitationem maxime minus animi JAVASCRIPT enim rem, nostrum cum iure reiciendis nobis eaque quia eum ut, cumque iusto soluta. Minus, inventore aliquam quaerat magni ratione, fuga, sint commodi beatae unde ad quae! Quasi voluptatem ipsum impedit eius quod non earum esse atque molestias repellat doloremque mollitia ad, voluptates itaque ipsa velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam consectetur ut provident magni ullam magnam ad exercitationem! Adipisci vel magni ducimus eaque possimus at reprehenderit iste doloribus dolorem iure modi enim voluptatibus voluptates recusandae error facilis harum esse molestias, JAVASCRIPT odio atque ratione illum alias, culpa natus! Ad doloremque cupiditate nostrum harum non, quae aut fugiat eius expedita omnis rem accusamus temporibus facere aperiam velit necessitatibus delectus quidem. Inventore tenetur, debitis eligendi delectus quo consequuntur similique tempore reprehenderit corrupti quisquam. JAVASCRIPT Omnis expedita modi dolore in quisquam maiores aliquid sequi autem. Quae ipsum praesentium id quam eveniet quasi perferendis numquam voluptatem exercitationem maxime minus animi enim rem, nostrum cum iure reiciendis nobis eaque quia eum ut, cumque iusto soluta. Minus, inventore aliquam quaerat magni ratione, fuga, sint commodi beatae unde ad quae! Quasi voluptatem ipsum impedit eius quod non earum esse atque molestias repellat doloremque mollitia ad, voluptates itaque ipsa velit."

document.write(article.substring(0, 150))

//replace(a, b) -> Replaces the string expression a with b. It only changes the first value.

document.write(article.replace("JAVASCRIPT", "REACT JS"))

//replaceAll(a, b) -> Converts all a value in content to b value.

document.write(article.replaceAll("JAVASCRIPT", "REACT JS"))

//toUpperCase() -> Writes characters in UpperCase
//toLowerCase() -> Writes characters in lowercase

document.write(article.toUpperCase())
document.write(article.toLowerCase())