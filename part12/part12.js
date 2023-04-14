/* 

Object

let abc = {
    key1: value1,
    key2: value2
}

It can contain all data types.

An empty object can be created. let abc = {}

*/

let user = {
    name: 'Hayko',
    surname: 'Cepkin',
    age: 45,
    job: 'Artist',
    songs: ['Yol Gozumu Dagliyor', 'Bertaraf Et', 'Kabul', 'Sandik', 'Gec Kaldim' ],
    family: [
        {
            brother: 'Ahmet',
            age: 37
        },
        {
            mother: 'Helin',
            age: 70
        },
        {
            father: 'Osman',
            age: 74
        }
    ]
}

console.log(user) // Writes the entire object
console.log(user.name) // Writes Hayko to the screen
console.log(user.family[2].father) // Writes Osman to the screen
console.log(`${user.name}'s brothers name is ${user.family[0].brother}. The age difference between them is ${user.age - user.family[0].age}`)

console.log(Object.keys(user)) //Writes all keys to the screen
console.log(Object.keys(user)[1]) //Writes surname to the screen
let data = Object.keys(user).length

for(let i = 0; i< data; i++) {
    console.log(`${Object.keys(user)[i]}`)
}
for(property of Object.keys(user)) {
    if(property == 'job') {
        console.log(property)
        break
    }
}
let keys = Object.keys(user)
let index = keys.indexOf('job')
console.log(keys[index])

console.log(Object.values(user)) // Writes all values
console.log(Object.values(user)[1]) //Writes Cepkin to the screen





