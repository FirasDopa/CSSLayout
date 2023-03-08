let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function scrollToTop () {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollTo({
            top : 5 ,
            behavior : "smooth"
        })}
scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function() {
    scrollToTop();
});
window.addEventListener("click",function(){
    scrollFunction();
})
