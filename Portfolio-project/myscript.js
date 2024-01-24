var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
var logo = document.getElementById('headerLogo');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');

logo.onmouseenter = function() {
    logo.style.fontSize = "60px";
}

logo.onmouseleave = function () {
    logo.style.fontSize ="";
}

button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}

close.onclick = function() {
    modal.style.display = "none";
}

function opacity1() {
    content.style.opacity = "1";

}
