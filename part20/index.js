let userInfo = document.getElementById('info')
let user2Info = document.getElementById('div')
let data = fetch('data.json')
.then(response=>response.json())
.then(info => {
    console.log(info.users)
    userInfo.innerText = `Our first member ${info.users[0].name} ${info.users[0].surname}, is a ${info.users[0].age} years old ${info.users[0].job}`
    
    user2Info.innerText = `Our ${info.users[1].job} ${info.users[1].name} ${info.users[1].surname} is ${(info.users[1].age)-(info.users[0].age)} years older than our ${info.users[0].job} ${info.users[0].name} ${info.users[0].surname}`
})

