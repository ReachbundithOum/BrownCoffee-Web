let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


/*Carousel Start*/
let slideIndex = 1;
showSlides(slideIndex);

function pushSlide(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlide");
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
/*Carousel End*/

/*ScrollTop Start*/
var button = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    button.style.display = "block";
  } else {
    button.style.display= "none";
  }
}

function scrollTopSide() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*Count Down Clock Start*/


/*Count Down Clock End*/