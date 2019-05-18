var logoK = document.querySelector('section > p:nth-of-type(1)');
var logoN = document.querySelector('section > p:nth-of-type(2)');
var logoO = document.querySelector('section > p:nth-of-type(3)');
var logoFirstL = document.querySelector('section > p:nth-of-type(4)');
var logoSecondL = document.querySelector('section > p:nth-of-type(5)');

var logoFull = document.querySelector('section');

logoK.onclick = function() {
    logoK.classList.toggle('selected');
}

logoN.onclick = function() {
    logoN.classList.toggle('selected');
}

logoO.onclick = function() {
    logoO.classList.toggle('selected');
}

logoFirstL.onclick = function() {
    logoFirstL.classList.toggle('selected');
}

logoSecondL.onclick = function() {
    logoSecondL.classList.toggle('selected');
}

/* Bron: https://www.youtube.com/watch?v=F7-LqvrCq14 */
var locationTopK = logoK.offsetTop;
var locationLeftK = logoK.offsetLeft;
var locationTopN = logoN.offsetTop;
var locationLeftN = logoN.offsetLeft;
var locationTopO = logoO.offsetTop;
var locationLeftO = logoO.offsetLeft;
var locationTopFirstL = logoFirstL.offsetTop;
var locationLeftFirstL = logoFirstL.offsetLeft;
var locationTopSecondL = logoSecondL.offsetTop;
var locationLeftSecondL = logoSecondL.offsetLeft;

function move(e){
    // pijl omlaag letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopK -= 5;
        logoK.style.bottom = (parseInt(locationTopK) + locationTopK) + "px";
        console.log("Locatie verticaal letter K = " + locationTopK);
    }
    
    // pijl rechts letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftK += 5;
        logoK.style.left = (parseInt(locationLeftK) + locationLeftK) + "px";
        console.log("Locatie horizontaal letter K = " + locationLeftK);
    }
    
    // pijl omhoog letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopK += 5;
        logoK.style.bottom = (parseInt(locationTopK) + locationTopK) + "px";
        console.log("Locatie verticaal letter K = " + locationTopK);
    }
    
    // pijl links letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftK -= 5;
        logoK.style.left = (parseInt(locationLeftK) + locationLeftK) + "px";
        console.log("Locatie horizontaal letter K = " + locationLeftK);
    }
    
    // pijl omlaag letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopN -= 5;
        logoN.style.bottom = (parseInt(locationTopN) + locationTopN) + "px";
    }
    
    // pijl rechts letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftN += 5;
        logoN.style.left = (parseInt(locationLeftN) + locationLeftN) + "px";
    }
    
    // pijl omhoog letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopN += 5;
        logoN.style.bottom = (parseInt(locationTopN) + locationTopN) + "px";
    }
    
    // pijl links letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftN -= 5;
        logoN.style.left = (parseInt(locationLeftN) + locationLeftN) + "px";
    }
    
    // pijl omlaag letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopO -= 5;
        logoO.style.bottom = (parseInt(locationTopO) + locationTopO) + "px";
    }
    
    // pijl rechts letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftO += 5;
        logoO.style.left = (parseInt(locationLeftO) + locationLeftO) + "px";
    }
    
    // pijl omhoog letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopO += 5;
        logoO.style.bottom = (parseInt(locationTopO) + locationTopO) + "px";
    }
    
    // pijl links letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftO -= 5;
        logoO.style.left = (parseInt(locationLeftO) + locationLeftO) + "px";
    }
    
    // pijl omlaag eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopFirstL -= 5;
        logoFirstL.style.bottom = (parseInt(locationTopFirstL) + locationTopFirstL) + "px";
    }
    
    // pijl rechts eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftFirstL += 5;
        logoFirstL.style.left = (parseInt(locationLeftFirstL) + locationLeftFirstL) + "px";
    }
    
    // pijl omhoog eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopFirstL += 5;
        logoFirstL.style.bottom = (parseInt(locationTopFirstL) + locationTopFirstL) + "px";
    }
    
    // pijl links eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftFirstL -= 5;
        logoFirstL.style.left = (parseInt(locationLeftFirstL) + locationLeftFirstL) + "px";
    }
    
    // pijl omlaag tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopSecondL -= 5;
        logoSecondL.style.bottom = (parseInt(locationTopSecondL) + locationTopSecondL) + "px";
    }
    
    // pijl rechts tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftSecondL += 5;
        logoSecondL.style.left = (parseInt(locationLeftSecondL) + locationLeftSecondL) + "px";
    }
    
    // pijl omhoog tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopSecondL += 5;
        logoSecondL.style.bottom = (parseInt(locationTopSecondL) + locationTopSecondL) + "px";
    }
    
    // pijl links tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftSecondL -= 5;
        logoSecondL.style.left = (parseInt(locationLeftSecondL) + locationLeftSecondL) + "px";
    }
}

document.onkeydown = move;