document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const url = URL.createObjectURL(file);
        document.getElementById("pdfViewer").src = url;
        document.getElementById("pdfViewer").style.display = "block";
    }
});

let container = document.getElementById("container");
let isDragging = false;
let isDraggable = true;
let offsetX, offsetY;

container.addEventListener("mousedown", function (e) {
    if (isDraggable && e.target !== document.getElementById("toggleDrag")) {
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    }
});

document.addEventListener("mousemove", function (e) {
    if (isDragging) {
        container.style.left = (e.clientX - offsetX) + "px";
        container.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
    container.style.cursor = "grab";
});

document.getElementById("toggleDrag").addEventListener("click", function () {
    isDraggable = !isDraggable;
    this.textContent = isDraggable ? "-" : "+";
});