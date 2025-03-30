let draggableDiv = document.getElementById("draggableDiv");
let CodeBox = document.getElementById("code_box"); 
let isDragging2 = false;
let isDraggable2 = true;
let offsetX2, offsetY2; // Định nghĩa biến ở phạm vi toàn cục

draggableDiv.addEventListener("mousedown", function (e) {
    if (isDraggable2 && e.target !== document.getElementById("toggleDrag2")) {
        isDragging2 = true;
        offsetX2 = e.clientX - draggableDiv.offsetLeft;
        offsetY2 = e.clientY - draggableDiv.offsetTop;
        draggableDiv.style.cursor = "grabbing";
    }
});

document.addEventListener("mousemove", function (e) {
    if (isDragging2) {
        draggableDiv.style.left = (e.clientX - offsetX2) + "px";
        draggableDiv.style.top = (e.clientY - offsetY2) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging2 = false;
    draggableDiv.style.cursor = "grab";
});

document.getElementById("toggleDrag2").addEventListener("click", function () {
    isDraggable2 = !isDraggable2;
    this.textContent = isDraggable2 ? "@" : "#";
    CodeBox.style.cursor = isDraggable2 ? "pointer" : "text";
});