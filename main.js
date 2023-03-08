function ToTop(){
    window.scrollTo({top : 0, behavior : "smooth"})
   }
     let slideIndex = 1;
     showSlides(slideIndex);

     // Next/previous controls
     function plusSlides(n) {
     showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}
const Form = document.getElementById("myform")
const Btn = document.getElementById("btnform")
Form.addEventListener("input", Validation)
Form.addEventListener("change", Validation)
function Validation(){
 if (Form.checkValidity()){
   Btn.disabled = false;
 }
 else {
   Btn.disabled = true;
 }
}