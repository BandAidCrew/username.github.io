/*
 FILE NAME: member_info.js
 WRITTEN BY: Daniel Martin Lundeby
 WHEN:  November 2016
 PURPOSE:  When the band member circle is clicked on the index page, a textbox with more information appears.
 */

window.addEventListener("load", function() {

    let boxes = [];
    boxes.push(document.getElementById("member1"));
    boxes.push(document.getElementById("member2"));
    boxes.push(document.getElementById("member3"));
    boxes.push(document.getElementById("member4"));

    let members = document.getElementById("members");

    for (let box of boxes) {
        addListener(box);
    }

    function addListener(box) {
        box.addEventListener("click", function (event) {

            let textbox = box.getElementsByClassName("textbox")[0];
            console.log(textbox);

            let newDisplay;
            let oldDisplay = window.getComputedStyle(textbox).display;
            if (oldDisplay == "initial") {
                newDisplay = "none";
            }
            else if (oldDisplay == "none") {
                newDisplay = "block";
            }

            for (elem of boxes) {
                let tb = elem.getElementsByClassName("textbox")[0];
                tb.style.display = "none";
            }

            textbox.style.display = newDisplay;

            console.log();

        })
    }
});

