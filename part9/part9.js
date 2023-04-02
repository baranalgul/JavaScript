/* 

ARRAYS

Variables that can hold more than one value.
It can contain more than one data type.
They are usually defined with const.

const array1 =['Param1', 'Param2', 'Param3']
const array2 =Array('Param1', 'Param2', 'Param3')

*/

const id =['Kaan', 'Pamukcu', 'Programmer']

console.log(id[2]) // Writes a Programmer to the screen.

/* Nested arrays */

const category= [
    ['Computer', 'Console'],
    ['Woman', 'Man', 'Children']
]

console.log(category[1][2])

// split() -> Fragments of value. Splits the value and converts it to an array.

let language = 'JavaScript'
let split = language.split('')
console.log(split)

let img = 'img/facebook.png,img/instagram.png'
let splitİmg = img.split(',')
console.log(splitİmg)

/* Arraylerin içeriğini değiştirme */

const catList = ['House', 'Automobile', 'Electronic', 'Clothes']

catList[0] = 'Teknology'
console.log(catList)

/* fill() -> Filling an empty array */

const arr1 = Array(3).fill('Hello')
console.log(arr1)

/* concat() -> It is used to combine different strings. 
               It can take more than one parameter.
*/

const womenClothes = ['skirt', 'blouse', 'body']
const menClothes = ['trousers', 'shirt', 'shorts']

const clothes1 = womenClothes.concat(menClothes)
console.log(clothes1)

const clothes2 = menClothes.concat(womenClothes)
console.log(clothes2)

const kidsClothes = ['bodysuit', 'hat', 'sock']
const generalWear = womenClothes.concat(menClothes, kidsClothes)
console.log(generalWear)

/* 

indexOf() -> Checks if a value (element) is in the array. Returns the index number, if any.

*/

const members1 = ['Burhan Altıntop', 'Hayko Cepkin', 'Mahmut Tuncer', 'Bülent Ersoy', 'Burhan Altıntop']

console.log(members1.indexOf('Mahmut Tuncer'))

let user = prompt('Enter the name')

console.log(members1.indexOf(user))

if(members1.indexOf(user) == -1 ) {
    console.log('no member registration')
} else {
    console.log('member has registered')
}
const members2 = ['Burhan Altıntop', 'Hayko Cepkin', 'Mahmut Tuncer', 'Bülent Ersoy',]
console.log(members2.indexOf('Burhan Altıntop')) // Writes 0 to the screen.
console.log(members2.lastIndexOf('Burhan Altıntop')) // Weites 4 to the screen.

/* 

includes() -> It works just like indexOf() but returns either true or false as a result.

*/

console.log(members2.includes('Mahmut Tuncer')) // Writes true to the screen.

let info = prompt('Enter the name')
let check = members2.includes(info)

if(check == true) {
    console.log('member has registered')
} else {
    console.log('no member registration')
}

/* 

toString() -> Converts the values of the array to string data type.

*/

const cat = ['Elektronic', 'Clothes', 'House']
console.log(cat.toString()) // Writes Elektronic,Clothes,House to the screen

/* 

push() -> It is used to add a new parameter to an array.
          But it adds the new parameter to the end. It can take more than one parameter.
          

*/

const tradeMark = ['Iphone', 'Samsung', 'Huawei']
console.log(tradeMark)
tradeMark.push('Oppo')
console.log(tradeMark) 
console.log(tradeMark.length) // Writes 5 to the screen.

/* 

pop() -> Deletes the last parameter in the array.

*/

const class1 = ['Hakan', 'Ahmet', 'Yılmaz', 'Gamze', 'Sinem']
class1.push('Kaan')
console.log(class1)
class1.pop()
console.log(class1)
let lastParam = class1.pop()
console.log(lastParam) // Writes Sinem to the screen.

const class2 = ['Hakan', 'Ahmet', 'Yılmaz', 'Gamze', 'Sinem']
class2.push('Kağan')
console.log(class2)
class2[class2.length - 1] = 'Kaan'
console.log(class2)

/* 

Shift() -> It is used to extract the first parameter from an array.

*/

class2.shift()
console.log(class2)

/* 

unshift() -> Adds the new parameter to the first row.
             It can take more than one parameter.

*/

class2.unshift('Canan')
console.log(class2)


/* 

reverse() -> Reverses the elements inside an array.

*/

class2.reverse()
console.log(class2)

/* 

sort() -> Bir dizi içindeki parametreleri artan bir şekilde sıralar.

*/

class2.sort()
console.log(class2)
class2.reverse()
console.log(class2)


