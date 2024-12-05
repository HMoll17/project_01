const slides = document.querySelectorAll(".Home_slides section");
let indexSlides = 0;
let isTransitioning;  //Para bloquear cliques muito rápidos

document.addEventListener("DOMContentLoaded", initialize);  //Quando a pagina carregar, chama a função "initialize"
document.addEventListener("DOMContentLoaded", updateClock);  //Quando a pagina carregar, chama a função "initialize"
setInterval(updateClock, 1000)

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

function updateClock(){
    const time = new Date();
    const year = time.getFullYear().toString().padStart(4, "0");
    const month = (time.getMonth() + 1).toString().padStart(2, "0");
    const day = time.getDate().toString().padStart(2, "0");
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");
    const dateString = `${hour}:${minute}:${second} ${day}/${month}/${year}`;
    document.getElementById("HomeDate").textContent = dateString;   
}

