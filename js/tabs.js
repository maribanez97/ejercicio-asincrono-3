'use strict'

const listaBtns = document.querySelectorAll(".Lista-item");
const bloque = document.querySelectorAll(".Bloque");

listaBtns.forEach ((btn, i) => {
    listaBtns[i].addEventListener('click', () => {

        listaBtns.forEach((btn, i) => {
            listaBtns[i].classList.remove("isActive");
            bloque[i].classList.remove ("isVisible");
        });

        listaBtns[i].classList.add("isActive");
        bloque[i].classList.add ("isVisible");
    });
});