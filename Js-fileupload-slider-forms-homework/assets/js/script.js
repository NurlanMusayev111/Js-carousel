"use strict";

let left = document.querySelector(".left");
let right = document.querySelector(".right");


right.addEventListener("click",function(){
    let activeImage = document.querySelector(".active-image")
    activeImage.classList.remove("active-image");
    
    if(activeImage.nextElementSibling != null){
        activeImage.nextElementSibling.classList.add("active-image")
    }else{
        this.parentNode.nextElementSibling.firstElementChild.classList.add("active-image")
    }
})


left.addEventListener("click",function(){
    let activeImage = document.querySelector(".active-image")
    activeImage.classList.remove("active-image");
    
    if(activeImage.previousElementSibling != null){
        activeImage.previousElementSibling.classList.add("active-image")
    }else{
        this.parentNode.nextElementSibling.lastElementChild.classList.add("active-image")
    }
})

