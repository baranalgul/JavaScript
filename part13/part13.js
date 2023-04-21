/* 

DOM (Document Object Managements)
Accessing html units with js
querySelector and getElementBy (ID, className, TagName)

document.URL -> Captures the address of the relevant page.
document.title -> It captures the information written in the title tag of the relevant page.
document.head -> It captures the head tags and any sub tags inside it.
document.links -> It captures all the links and their properties inside the page.

*/

let adress = document.URL

console.log(adress)
console.log(document.title)
console.log(document.head)

//getElementById
// document.getElementById('title') // Captures element with id title

let title = document.getElementById('title')
console.log(title)

//textContent or innerText -> Replaces the text inside the element.
let title2 = document.getElementById('title2')
title.textContent = 'Title2'

document.getElementById('title3').innerText = 'Rewritten'


for(let i=1; i<=6; i++) {
    document.write(`
    <div id="box${i}" style="background-color:yellow; padding:14px; float:left; margin-right:5px; border-radius:50%;"></div>
    `)

    document.getElementById(`box${i}`).textContent = Math.floor(Math.random() * 49) + 1
}

//innerHTML -> İlgili elementin etiketlerini de değiştirir.

let data = {
    title: 'Web Design Service',
    img:'https://www.33webtasarim.com/File_Uploadx/Sayfa/Buyuk/mersin-web-tasarim-turkiyenin-her-yerine-web-tasarim-hizmeti-306798.JPG'
}

let img = document.getElementById('img')
img.innerHTML = `<img src="${data.img}" style="width:20%;">
<h2>${data.title}</h2>`

let cTitle = document.getElementById('title')
cTitle.style.color = 'red'
cTitle.style.backgroundColor = 'Yellow'

//getElementsByClassName
//Accesses elements by class name
//Captured elements are passed to the array

let buttons = document.getElementsByClassName('btn')
console.log(buttons)

buttons[1].style.backgroundColor = 'Red'

//getElementsByTagName
//Elements are accessed by tag name
//Captured elements are passed to the array

let h4 = document.getElementsByTagName('h4')
h4[0].innerText = 'New Title'

let h2 = document.getElementsByTagName('h2')
for(let i=0; i<h2.length; i++) {
h2[i].textContent = 'New Title'
}

/* 
İlgili method ile kullanıcıdan 3 adet ayrı başlık alınacak
Alınan başlıklar boş bir diziye aktarılacak
Bu başlıklar body içinde js ile yazdırılacak
*/

// let title1 = prompt('Enter title')
// let title3 = prompt('Enter title')
// let title4 = prompt('Enter title')
// let array = []
// array.push(title1)
// array.push(title3)
// array.push(title4)
// for(let i=0; i<array.length; i++) {
//     document.write (
//         `<h1>${array[i]}</h1>`
//     )
// }



