let valuee = document.querySelector('.val')

let buttons = document.querySelectorAll('button')
let addButton = buttons[1]
let subButton = buttons[0]

let val = 0;
addButton.addEventListener('click',() => {val++; valuee.innerText = val})
subButton.addEventListener('click',() => {val--; valuee.innerText = val})

