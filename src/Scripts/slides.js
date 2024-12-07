const slides = document.querySelectorAll(".Home_slides section");
let indexSlides = 0;
let isTransitioning;  //Para bloquear cliques muito rápidos

document.addEventListener("DOMContentLoaded", initialize);  //Quando a pagina carregar, chama a função "initialize"

function initialize() {
    slides[indexSlides].classList.add("Display_slide");
}


function nextSlide(){
    if (isTransitioning){
        return;
    }
    isTransitioning = true;
    indexSlides++;
    if(indexSlides >= slides.length){
        indexSlides = 0;
    }
    showSlide(indexSlides);
    setTimeout(() => {
        isTransitioning = false;
    }, 300);
}

function previousSlide(){
    if(isTransitioning){
        return;
    }
    indexSlides--;
    if(indexSlides < 0){
        indexSlides = slides.length -1;
    }
    showSlide(indexSlides);
    setTimeout(() => {
        isTransitioning = false
    }, 300);
}


function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("Display_slide");
    });
    slides[index].classList.add("Display_slide");
}
