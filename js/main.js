// Stick the header to the top of the page when scrolling past the header region
window.addEventListener('scroll', function() {
    let menu_bar = document.getElementById('menu-bar');
    let menu_bar_replacement = document.getElementById('menu-bar-replacement');
    menu_bar_replacement.style.height = window.getComputedStyle(menu_bar).getPropertyValue("height");

    let y_pos = window.pageYOffset;
    let limit = window.getComputedStyle(document.getElementsByClassName('header')[0]).getPropertyValue("height");
    console.log(limit);

    if (y_pos > limit) {
        menu_bar.style.position = "fixed";
        menu_bar_replacement.style.display = "block";
    }
    else {
        menu_bar.style.position = "static";
        menu_bar_replacement.style.display = "none";
    }
});

// Google analytics stuff
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-87278039-1', 'auto');
ga('send', 'pageview');
