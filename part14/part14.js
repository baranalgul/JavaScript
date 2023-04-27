/* 

querySelector
getElement rules apply
Also captures tag information

*/

document.querySelector('#title').innerHTML = 'New Title'
document.querySelector('#title').innerHTML = '<h1>H1</h1>'

let newTitle = prompt('Enter your title')
let oldTitle = document.querySelector('#services > div > div > div > h1')
oldTitle.innerHTML = newTitle

let info = document.querySelector('#name')

function nameSurname() {
    alert(`Your Name: ${info.value}`)
}
let button = document.getElementById('dark')
function darkMode() {
    document.body.style.backgroundColor= 'black'
}

//querySelector Class
let heading = document.querySelectorAll('.title')
console.log(heading[0])
console.log(heading[1].textContent)

//querySelector Tag
let section = document.querySelectorAll('section')
console.log(section[0])