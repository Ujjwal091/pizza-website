let display = false;

function hideShow() {
    if (display === false) {
        display = true;
        // changing the display from inline to block by targeting element by its id
        // https://www.w3schools.com/jsref/prop_html_style.asp
        document.getElementById("links").style.display = "block";
    } else {
        display = false;
        // changing the display from inline to block by targeting element by its id
        // https://www.w3schools.com/jsref/prop_html_style.asp
        document.getElementById("links").style.display = "none";
    }
}
