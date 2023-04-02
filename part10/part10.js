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









