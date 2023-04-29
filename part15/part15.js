/* 

Object Data Types
Can cover all data types
has the key:value structure
{} ile tanımlanır
Kod sıralmasıyla çıktı sıralaması aynı değildir
*/

let user = {
    name: 'Hayko',
    surname: 'Cepkin',
    age:45,
    job: 'Artist',
    songs: [
        'Melekler',
        'Kabul',
        'Song 3'
    ],
    family: [
        {
            brother: 'Ahmet',
            age: 35
        },
        {
            mother: 'Seval',
            age: 80
        },
        {
            father: 'Mehmet',
            age: '90'
        }
    ],
    photo:'https://tr.web.img4.acsta.net/pictures/17/03/09/12/59/445011.jpg'
}

let box = document.getElementsByClassName('card')

box[0].innerHTML = `<img src="${user.photo}" alt="">
<div class="card-body">
<h2 style="font-size:20px;" class="text-center">${user.name} ${user.surname}</h2>
<span>job : ${user.job}</span><br>
<ol>
    <li>${user.songs[0]}</li>
    <li>${user.songs[1]}</li>
    <li>${user.songs[2]}</li>
</ol>
</div>`