/*
FILE NAME: album.js
WRITTEN BY:  Magnus Nesje Vatne (with help from w3schools)
WHEN:  November 2016
PURPOSE:  JavaScript for viewing a slideshow when a picture is clicked and moving between the pictures in the album
          This code was inspired by w3schools (http://www.w3schools.com/w3css/w3css_slideshow.asp) and modified for use in this context
*/


function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
