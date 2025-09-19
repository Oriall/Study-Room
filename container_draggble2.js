let container2 = document.getElementById("container2");
let isDragging23 = false;
let isDraggable23 = true;
let offsetX23, offsetY23;

container2.addEventListener("mousedown", function (e) {
    if (isDraggable23 && e.target !== document.getElementById("toggleDrag3")) {
        isDragging23 = true;
        offsetX23 = e.clientX - container2.offsetLeft;
        offsetY23 = e.clientY - container2.offsetTop;
        container2.style.cursor = "grabbing";
    }
});

document.addEventListener("mousemove", function (e) {
    if (isDragging23) {
        container2.style.left = (e.clientX - offsetX23) + "px";
        container2.style.top = (e.clientY - offsetY23) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging23 = false;
    container2.style.cursor = "grab";
});

document.getElementById("toggleDrag3").addEventListener("click", function () {
    isDraggable23 = !isDraggable23;
    this.textContent = isDraggable23 ? "-" : "+";
});