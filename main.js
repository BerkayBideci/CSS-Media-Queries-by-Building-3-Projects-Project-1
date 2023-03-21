window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;
    document.querySelector("#size").innerHTML = "Width : " + myWidth + "px";
}
