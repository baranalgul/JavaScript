/* 

Internal File Method
1-It is more logical to assign the variable with fetch.
2-If the json file is in our own root directory, we have to run a virtual server.
3-The rules for using the Object data type are the same.
4-Json is a file type that can be used in all backend languages.

*/



let data = fetch('data.json')
    .then(response => response.json())
    .then(query => {
        console.log(query)
        console.log(query.users)
        console.log(query.users[0].name)
        console.log(query.authority[0])
    })

    let list = document.getElementById('list')

    let data2 = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>{
    //10 Titles
    for(content of data){
        if(content.id <=10){
            list.innerHTML += `<li>${content.title}</li>`
        }
    }
    //All Titles
    // for(content of data){
    //     list.innerHTML += `<li>${content.title}</li>`
    // }
})

let div = document.getElementById('photos')

let photos = fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(photos => {
    for(image of photos){
        if(image.id<=10){
              div.innerHTML += `<img src="${image.url}" alt="" style="width:300px; height:300px; margin:5px;">`
        }
       
    }
})