var btn = document.querySelector(".btn");
var circle = document.querySelector(".small-circle");
var container = document.querySelector(".container");
btn.onclick = () => {
    btn.classList.toggle("toggle");
    circle.classList.toggle("toggle");
    container.classList.toggle("toggle");
}