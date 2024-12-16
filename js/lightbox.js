'use strict'

//Constantes y variables
const imgList = document.querySelectorAll(".Img")
const lightbox = document.querySelector(".Lightbox")
const btnClose = document.querySelector(".BtnClose")
const imagenGrande = document.querySelector(".ImgGrande")

const btnCloseHandler = () => lightbox.classList.remove('isActive')
const imgListHandler = (i) => {
    lightbox.classList.add("isActive");
    imagenGrande.src = imgList[i].src;
}

// Cuando hago click en una clase .Img
    //.lightbox se le ADD la clase isActive
    // .ImgGrande añadirle el atributo src de la imagen

    imgList.forEach((img, i) => {
        imgList[i].addEventListener('pointerdown', () =>{
            imgListHandler(i);
        });
    });

//Cuando hago click en close
    // remove a lightbox la clase isActive

    btnClose.addEventListener('pointerdown', btnCloseHandler);