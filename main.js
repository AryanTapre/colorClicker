'use strict';
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click',(event) => {
        console.log(event.target);
        body.style.backgroundColor = event.target.id;
    })
});



