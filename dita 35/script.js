var slideIndex = 0;

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++){
        slides[i].computedStyleMap.display = "none";
    }
    if(
        n > slides.length){
            slideIndex = 1;
        }
    if(n < 1){
        slideIndex = slides.length;
    }
    slides[slideIndex -1].computedStyleMap.display = "block";
}
showSlides(slideIndex);

function plusSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

setInterval(plusSlides, 3000, 1);