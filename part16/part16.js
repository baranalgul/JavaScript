/* 

Json and Methods(JavaScript Object Notation)
It is used for data storage. 
Internal and external file structure is available.
It can contain all data types.

*/

let data = {
    "key1": "value1",
    "key2": "value2"
}

console.log(data.key1)

let data2 = {
    users: [
        {
            name:'Ahmet',
            surname: 'Yildirim',
            age: 33
        },
        {
            name:'Murat',
            surname: 'Sahin',
            age: 32
        },
        {
            name:'Fatih',
            surname: 'Bulut',
            age: 30
        }
    ],
    process: 'GET'
}

console.log(data2.users[0].age)

//Json Methods
//stringify() -> Json datayı stringe çevirir. Bu işlemden sonra veri tabanına kayıt yapılabilir.

let registration = JSON.stringify(data2)
console.log(registration)

//parse() -> Converts string data to JSON format

let convert = JSON.parse(registration)
console.log(convert)

// for in loop
//Used for json data
// Returns key information of json data

for(let getData in data2){
    console.log(getData)
    console.log(data2[getData])
    for(let jsonArray of data2.users){
        console.log(jsonArray)
        console.log(jsonArray.name)
    }
}



