// Wait for the browser to render
window.onload = function(){

// Add a hidden div over the screen.
// This will be for the lightbox content at a later stage
let lightbox = document.createElement("div");
lightbox.id = "lightbox";
// lightbox.style.display = "hidden";
let content = document.createElement("div");
content.id = "lightboxContent";
//Add the text node to the newly created div
lightbox.appendChild(content);

// add the newly created element and its content into the dom
document.body.appendChild(lightbox);


// Get all photos with class lightbox
let photos = document.getElementsByClassName("lightbox");


//iterate over the photos and add onclick property to each element
for (var photo in photos) {
  console.log("tagged: ",photo);
  photos[photo].id = "img "+photo;
  photos[photo].onclick = function(e){
    showImg(this);
  }
}

}

// lightbox function
// When choosing an image or video:
// 1. it should enlarge and center on the screen,
// 2. the background should be in grayscale.
function showImg(imgObj) {
  //find img src and add img to lightbox
  console.log(imgObj);
  let lightbox = document.getElementById("lightboxContent");
  lightbox.innerHTML = '<img src="'+imgObj.src+'"/>';
}
