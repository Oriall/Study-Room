function pic1() {
    document.getElementById('wrapper').style.backgroundImage = "url('bg-page\ 1.jpg')";
    document.getElementById('phong1').style.display = "flex";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong6').style.display = "none";
    document.getElementById('phong5').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong4').style.display = "none";
}
function pic2() {
    document.getElementById('wrapper').style.backgroundImage = "url('Coffee\ in\ rain\ -\ gif\ animation.gif')";
    document.getElementById('phong2').style.display = "flex";
    document.getElementById('phong1').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong4').style.display = "none";
    document.getElementById('phong6').style.display = "none";
    document.getElementById('phong5').style.display = "none";
}
function pic3() {
    document.getElementById('wrapper').style.backgroundImage = "url('2020.gif')";
    document.getElementById('phong3').style.display = "flex";
    document.getElementById('phong4').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong6').style.display = "none";
    document.getElementById('phong5').style.display = "none";
    document.getElementById('phong1').style.display = "none";
}
function pic4() {
    document.getElementById('wrapper').style.backgroundImage = "url('Daydreaming\ 🌫.gif')";
    document.getElementById('phong4').style.display = "flex";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong6').style.display = "none";
    document.getElementById('phong5').style.display = "none";
    document.getElementById('phong1').style.display = "none";
}
function pic5() {
    document.getElementById('wrapper').style.backgroundImage = "url('After the rain___.gif')";
    document.getElementById('phong5').style.display = "flex";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong1').style.display = "none";
    document.getElementById('phong4').style.display = "none";
    document.getElementById('phong6').style.display = "none";
}
function pic6() {
    document.getElementById('wrapper').style.backgroundImage = "url('bg_1 (2).gif')";
    document.getElementById('phong6').style.display = "flex";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong4').style.display = "none";
    document.getElementById('phong5').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong1').style.display = "none";
}
function pic7() {
    document.getElementById('wrapper').style.backgroundImage = "url('p_7.gif')";
    document.getElementById('phong7').style.display = "flex";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong6').style.display = "none";
    document.getElementById('phong8').style.display = "none";
    document.getElementById('phong4').style.display = "none";
    document.getElementById('phong5').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong1').style.display = "none";
}
function pic8() {
    document.getElementById('wrapper').style.backgroundImage = "url('p_81.gif')";
    document.getElementById('phong8').style.display = "flex";
    document.getElementById('phong2').style.display = "none";
    document.getElementById('phong4').style.display = "none";
    document.getElementById('phong6').style.display = "none";
    document.getElementById('phong7').style.display = "none";
    document.getElementById('phong5').style.display = "none";
    document.getElementById('phong3').style.display = "none";
    document.getElementById('phong1').style.display = "none";
}

let currentList = 1;

function updateList() {
    document.getElementById("list").style.display = currentList === 1 ? "flex" : "none";
    document.getElementById("list2").style.display = currentList === 2 ? "flex" : "none";
    document.getElementById("list3").style.display = currentList === 3 ? "flex" : "none";
    document.getElementById("list4").style.display = currentList === 4 ? "flex" : "none";
}

function next() {
    currentList = currentList === 4 ? 1 : currentList + 1;
    updateList();
}

function prev() {
    currentList = currentList === 1 ? 4 : currentList - 1;
    updateList();
}
