window.addEventListener("load", function() {
    const INFO1 = "ABC";
    const INFO2 = "DEF";
    const INFO3 = "GHI";
    const INFO4 = "JKL";

    let box1 = document.getElementById("member1");
    let box2 = document.getElementById("member2");
    let box3 = document.getElementById("member3");
    let box4 = document.getElementById("member4");
    let members = document.getElementById("members");

    addListener(box1, INFO1);
    addListener(box2, INFO2);
    addListener(box3, INFO3);
    addListener(box4, INFO4);

    function addListener(box, text) {
        box.addEventListener("click", function () {
            let textbox = document.getElementById("textbox");
            let oldClass = null;
            if (textbox != null) {
                oldClass = textbox.className;
                // If textbox exists, it should be removed
                textbox.remove();
            }

            // Add textbox if a new box is clicked
            if (oldClass != box.id) {
                addTextbox(box, text);
            }

        })
    }
});

function addTextbox(box, text) {
    textbox = document.createElement("textbox");
    textbox.id = "textbox";
    textbox.classList.add(box.id);
    textbox.style.width = members.style.width;
    textbox.style.backgroundColor = "red";
    textbox.innerHTML = text;
    members.appendChild(textbox);
}