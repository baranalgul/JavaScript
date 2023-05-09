/* 

Event Listener

addEventListener('event', function)

*/

let btn = document.getElementById('btn')
let darkMode = document.getElementById('darkMode')

btn.addEventListener('click', function(){
    btn.innerText = 'The call was made'
})

darkMode.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
})

let man = document.getElementById('man1')
man.addEventListener('mouseover', ()=>{
    man.setAttribute('src', 'man2.png')
})
man.addEventListener('mouseout',()=> {
    man.setAttribute('src', 'man1.png')
})




