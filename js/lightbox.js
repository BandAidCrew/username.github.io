/*
FILE NAME: lightbox.js
WRITTEN BY:  Henry S. Sjøen
WHEN:  November 2016
PURPOSE:  Makes images with class lightbox clickable and presents the image fullscreen.
*/

/* global window */
/* global document */

// Wait for the browser to render
window.addEventListener("load", function() {
// Add a hidden div over the screen.
// This will be for the lightbox content at a later stage
  let lightbox = document.createElement("div");
  lightbox.id = "lightbox";
// lightbox.style.display = "hidden";
  let content = document.createElement("div");
  content.id = "lightboxContent";
// Add the text node to the newly created div
  lightbox.appendChild(content);

// add the newly created element and its content into the dom
  document.body.appendChild(lightbox);

// Get all photos with class lightbox
  let photos = document.getElementsByClassName("lightbox");

// iterate over the photos and add onclick property to each element
  for (let photo in photos) {
    if (photos.hasOwnProperty(photo)) {
      // console.log("tagged: ", photo);
      photos[photo].id = "img " + photo;
      photos[photo].onclick = function(e) {
        showImg(this);
      };
    }
  }
});

/**
 * Shows a given img in the lightbox
 * @param {object} imgObj
 * lightbox function
 * When choosing an image or video:
 * 1. it should enlarge and center on the screen,
 * 2. the background should be in grayscale.
 */
function showImg(imgObj) {
  // find img src and add img to lightbox
  // console.log(imgObj);
  let lightbox = document.getElementById("lightboxContent");
  lightbox.innerHTML = '<img src="' + imgObj.src + '"/>';
  let documentDiv = document.getElementById("lightbox");
  documentDiv.style.visibility = "visible";

  // Hide the lightbox when clicked
  documentDiv.onclick = function(e) {
    documentDiv.style.visibility = "hidden";
  };
}
