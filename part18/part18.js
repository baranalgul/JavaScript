let userList = document.getElementById('users')

let users = fetch('https://reqres.in/api/users?page=2')
.then(response=> response.json())
.then(data2=>{
    for(let i = 0; i<data2.data.length; i++){
        userList.innerHTML += `<li>${data2.data[i].email}</li>`
    }
})