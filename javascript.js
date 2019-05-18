var logoK = document.querySelector('section > p:nth-of-type(1)');
var logoN = document.querySelector('section > p:nth-of-type(2)');
var logoO = document.querySelector('section > p:nth-of-type(3)');
var logoFirstL = document.querySelector('section > p:nth-of-type(4)');
var logoSecondL = document.querySelector('section > p:nth-of-type(5)');

var logoFull = document.querySelector('section');



// Selecteren van letters

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



// Timers

function blueTimer() {
  logoK.style.color = "blue";
}

function redTimer() {
  logoK.style.color = "red";
}

function yellowTimer() {
  logoK.style.color = "yellow";
}

function greenTimer() {
  logoK.style.color = "green";
}

function purpleTimer() {
  logoK.style.color = "purple";
}

function orangeTimer() {
  logoK.style.color = "orange";
}

/* Bron: https://www.youtube.com/watch?v=F7-LqvrCq14 */
/* Bron offsetTop en offsetLeft: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft */
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

function changeLetters(e){
    
    
    // Verander positie van letters
    
    // pijl omlaag letter K
    /* Bron: https://stackoverflow.com/questions/9587070/if-statement-to-find-a-class-in-javascript */
    /* Bron keyCode: http://keycode.info/ */
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
    
    
    // Verander kleur van letters
    
    // Blauw
    if ((logoK.classList.contains('selected')) && (e.keyCode === 66)) {
        logoK.classList.add('blue');
        logoK.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 66)) {
        logoN.classList.add('blue');
        logoN.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 66)) {
        logoO.classList.add('blue');
        logoO.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 66)) {
        logoFirstL.classList.add('blue');
        logoFirstL.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 66)) {
        logoSecondL.classList.add('blue');
        logoSecondL.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    
    // Rood
    if ((logoK.classList.contains('selected')) && (e.keyCode === 82)) {
        logoK.classList.add('red');
        logoK.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 82)) {
        logoN.classList.add('red');
        logoN.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 82)) {
        logoO.classList.add('red');
        logoO.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 82)) {
        logoFirstL.classList.add('red');
        logoFirstL.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 82)) {
        logoSecondL.classList.add('red');
        logoSecondL.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    
    // Geel
    if ((logoK.classList.contains('selected')) && (e.keyCode === 89)) {
        logoK.classList.add('yellow');
        logoK.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 89)) {
        logoN.classList.add('yellow');
        logoN.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 89)) {
        logoO.classList.add('yellow');
        logoO.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 89)) {
        logoFirstL.classList.add('yellow');
        logoFirstL.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 89)) {
        logoSecondL.classList.add('yellow');
        logoSecondL.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    
    // Groen
    if ((logoK.classList.contains('selected')) && (e.keyCode === 71)) {
        logoK.classList.add('green');
        logoK.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 71)) {
        logoN.classList.add('green');
        logoN.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 71)) {
        logoO.classList.add('green');
        logoO.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 71)) {
        logoFirstL.classList.add('green');
        logoFirstL.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 71)) {
        logoSecondL.classList.add('green');
        logoSecondL.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    
    // Paars
    if ((logoK.classList.contains('selected')) && (e.keyCode === 80)) {
        logoK.classList.add('purple');
        logoK.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 80)) {
        logoN.classList.add('purple');
        logoN.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 80)) {
        logoO.classList.add('purple');
        logoO.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 80)) {
        logoFirstL.classList.add('purple');
        logoFirstL.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 80)) {
        logoSecondL.classList.add('purple');
        logoSecondL.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    
    // Oranje
    if ((logoK.classList.contains('selected')) && (e.keyCode === 79)) {
        logoK.classList.add('orange');
        logoK.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 79)) {
        logoN.classList.add('orange');
        logoN.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 79)) {
        logoO.classList.add('orange');
        logoO.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 79)) {
        logoFirstL.classList.add('orange');
        logoFirstL.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 79)) {
        logoSecondL.classList.add('orange');
        logoSecondL.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
}

document.onkeydown = changeLetters;