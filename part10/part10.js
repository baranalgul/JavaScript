/* 

Loops()

It is used for repetitive operations.

1-For
2-While
3-do-While
4-forEach

*/

/*

For Loops 

for(variable; limits; increase or decrease){
    Code set to be repeated
}

*/

for(let i = 0; i <= 10; i++){
    console.log(i) // Writes from 0 to 10
}

for(let i = 5; i >= 0; i--){
    console.log(i) // Writes from 5 to 0
}
for(let i = 1; i <= 5; i++){
    document.write('baran <br>') 
}

let name = 'Baran' //Global Scope

for(let i = 1; i <= 5; i++){
    let name = 'Baran' //BLock Scope
    document.write(`${i} ${name} <br>`)
}
let names = ['Hakan', 'Hayko', 'Bülent', 'Mahmut']

for(let i = 0; i<4; i++) {
    console.log(`${i+1} - ${names[i]}`)
}

let names2 = ['Selim', 'Selin', 'Senem', 'Sinan']

for(let i = 0; i < names.length; i++) {
    console.log(`${i+1} - ${names2[i]}`)
}

/* 

For Loop (for of)
for(const elementName of arrayName) {
    code block to run
}

*/

const language = ['Html', 'Css', 'Js', 'Php']

for(const lang of language) {
    console.log(lang)
}

/* 

While Loops

The working logic is the same as the for loop

*/

let b = 0 // The variable will be defined outside.
while(b<=5) {
    console.log('Baran')
    b++ // The increase or decrease will be in
}

/* 

Do While Loops

The loop will run at least once, whether the condition is true or not.

*/

let a = 0

do {
    console.log('JavaScript')
    a++
} while (a < -5)

/* 

Break(Stopping the loop)
We can stop the loop according to an argument to be determined without having to run the entire condition.

*/

let softwareLanguage = ['Html', 'Css', 'Js', 'Php', 'C#', 'Unity', 'python', 'React', 'Vue']

for(let lang of softwareLanguage) {
    if(lang == 'Unity') {
        console.log(`Data named ${lang} has been found`)
        break;
    }
    console.log(lang)
}

/* Continue */

let softwareLanguage2 = ['Html', 'Css', 'Js', 'Php', 'C#', 'Unity', 'python', 'React', 'Vue']

for(let lang of softwareLanguage2) {
    if(lang == 'Php') {
        // console.log(`${lang} named data was not processed`)
        continue
    }
    console.log(lang)
}

for(let i = 0; i <= 100; i+=2) {
    console.log(i)
}
for(let i = 1; i<=100; i+=2) {
    console.log(i)
}








