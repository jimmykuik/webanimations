/*eslint-env browser*/


// Haalt de elementen op uit de HTML

var logoK = document.querySelector('section > p:nth-of-type(1)');
var logoN = document.querySelector('section > p:nth-of-type(2)');
var logoO = document.querySelector('section > p:nth-of-type(3)');
var logoFirstL = document.querySelector('section > p:nth-of-type(4)');
var logoSecondL = document.querySelector('section > p:nth-of-type(5)');




// Selecteren van letters

logoK.addEventListener('click', function () {
    logoK.classList.toggle('selected');
    logoN.classList.remove('selected');
    logoO.classList.remove('selected');
    logoFirstL.classList.remove('selected');
    logoSecondL.classList.remove('selected');
})

logoN.addEventListener('click', function () {
    logoK.classList.remove('selected');
    logoN.classList.toggle('selected');
    logoO.classList.remove('selected');
    logoFirstL.classList.remove('selected');
    logoSecondL.classList.remove('selected');
})

logoO.addEventListener('click', function () {
    logoK.classList.remove('selected');
    logoN.classList.remove('selected');
    logoO.classList.toggle('selected');
    logoFirstL.classList.remove('selected');
    logoSecondL.classList.remove('selected');
})

logoFirstL.addEventListener('click', function () {
    logoK.classList.remove('selected');
    logoN.classList.remove('selected');
    logoO.classList.remove('selected');
    logoFirstL.classList.toggle('selected');
    logoSecondL.classList.remove('selected');
})

logoSecondL.addEventListener('click', function () {
    logoK.classList.remove('selected');
    logoN.classList.remove('selected');
    logoO.classList.remove('selected');
    logoFirstL.classList.remove('selected');
    logoSecondL.classList.toggle('selected');
})



// Timers om de letterkleur aan te passen in CSS

function blueTimer() {
    if (logoK.classList.contains('selected')) {
        logoK.style.color = "blue";
    }

    if (logoN.classList.contains('selected')) {
        logoN.style.color = "blue";
    }

    if (logoO.classList.contains('selected')) {
        logoO.style.color = "blue";
    }

    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.style.color = "blue";
    }

    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.style.color = "blue";
    }
}

function redTimer() {
    if (logoK.classList.contains('selected')) {
        logoK.style.color = "red";
    }

    if (logoN.classList.contains('selected')) {
        logoN.style.color = "red";
    }

    if (logoO.classList.contains('selected')) {
        logoO.style.color = "red";
    }

    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.style.color = "red";
    }

    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.style.color = "red";
    }
}

function yellowTimer() {
    if (logoK.classList.contains('selected')) {
        logoK.style.color = "yellow";
    }

    if (logoN.classList.contains('selected')) {
        logoN.style.color = "yellow";
    }

    if (logoO.classList.contains('selected')) {
        logoO.style.color = "yellow";
    }

    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.style.color = "yellow";
    }

    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.style.color = "yellow";
    }
}

function greenTimer() {
    if (logoK.classList.contains('selected')) {
        logoK.style.color = "green";
    }

    if (logoN.classList.contains('selected')) {
        logoN.style.color = "green";
    }

    if (logoO.classList.contains('selected')) {
        logoO.style.color = "green";
    }

    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.style.color = "green";
    }

    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.style.color = "green";
    }
}

function purpleTimer() {
    if (logoK.classList.contains('selected')) {
        logoK.style.color = "purple";
    }

    if (logoN.classList.contains('selected')) {
        logoN.style.color = "purple";
    }

    if (logoO.classList.contains('selected')) {
        logoO.style.color = "purple";
    }

    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.style.color = "purple";
    }

    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.style.color = "purple";
    }
}

function orangeTimer() {
    if (logoK.classList.contains('selected')) {
        logoK.style.color = "orange";
    }

    if (logoN.classList.contains('selected')) {
        logoN.style.color = "orange";
    }

    if (logoO.classList.contains('selected')) {
        logoO.style.color = "orange";
    }

    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.style.color = "orange";
    }

    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.style.color = "orange";
    }
}


// Zet de waarde van Top en Left de huidige CSS waarde
/* Bron: https://www.youtube.com/watch?v=F7-LqvrCq14 */
var locationTopK = 0;
var locationTopN = 0;
var locationTopO = 0;
var locationTopFirstL = 0;
var locationTopSecondL = 0;
var locationLeftK = 0;
var locationLeftN = 0;
var locationLeftO = 0;
var locationLeftFirstL = 0;
var locationLeftSecondL = 0;
var fontSizeK = 20;
var fontSizeN = 20;
var fontSizeO = 20;
var fontSizeFirstL = 20;
var fontSizeSecondL = 20;
var fontSizeResponsiveK = 15;
var fontSizeResponsiveN = 15;
var fontSizeResponsiveO = 15;
var fontSizeResponsiveFirstL = 15;
var fontSizeResponsiveSecondL = 15;



function changeLetters(e) {

    // Verander positie van letters

    // pijl omlaag letter K
    /* Bron: https://stackoverflow.com/questions/9587070/if-statement-to-find-a-class-in-javascript */
    /* Bron keyCode: http://keycode.info/ */
    if ((logoK.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopK += 10;
        logoK.style.top = (parseInt(locationTopK)) + "px";
    }

    // pijl rechts letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftK += 10;
        logoK.style.left = (parseInt(locationLeftK)) + "px";
    }

    // pijl omhoog letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopK -= 10;
        logoK.style.top = (parseInt(locationTopK)) + "px";
    }

    // pijl links letter K
    if ((logoK.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftK -= 10;
        logoK.style.left = (parseInt(locationLeftK)) + "px";
    }

    // pijl omlaag letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopN += 10;
        logoN.style.top = (parseInt(locationTopN)) + "px";
    }

    // pijl rechts letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftN += 10;
        logoN.style.left = (parseInt(locationLeftN)) + "px";
    }

    // pijl omhoog letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopN -= 10;
        logoN.style.top = (parseInt(locationTopN)) + "px";
    }

    // pijl links letter N
    if ((logoN.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftN -= 10;
        logoN.style.left = (parseInt(locationLeftN)) + "px";
    }

    // pijl omlaag letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopO += 10;
        logoO.style.top = (parseInt(locationTopO)) + "px";
    }

    // pijl rechts letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftO += 10;
        logoO.style.left = (parseInt(locationLeftO)) + "px";
    }

    // pijl omhoog letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopO -= 10;
        logoO.style.top = (parseInt(locationTopO)) + "px";
    }

    // pijl links letter O
    if ((logoO.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftO -= 10;
        logoO.style.left = (parseInt(locationLeftO)) + "px";
    }

    // pijl omlaag eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopFirstL += 10;
        logoFirstL.style.top = (parseInt(locationTopFirstL)) + "px";
    }

    // pijl rechts eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftFirstL += 10;
        logoFirstL.style.left = (parseInt(locationLeftFirstL)) + "px";
    }

    // pijl omhoog eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopFirstL -= 10;
        logoFirstL.style.top = (parseInt(locationTopFirstL)) + "px";
    }

    // pijl links eerste letter L
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftFirstL -= 10;
        logoFirstL.style.left = (parseInt(locationLeftFirstL)) + "px";
    }

    // pijl omlaag tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 40)) {
        locationTopSecondL += 10;
        logoSecondL.style.top = (parseInt(locationTopSecondL)) + "px";
    }

    // pijl rechts tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 39)) {
        locationLeftSecondL += 10;
        logoSecondL.style.left = (parseInt(locationLeftSecondL)) + "px";
    }

    // pijl omhoog tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 38)) {
        locationTopSecondL -= 10;
        logoSecondL.style.top = (parseInt(locationTopSecondL)) + "px";
    }

    // pijl links tweede letter L
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 37)) {
        locationLeftSecondL -= 10;
        logoSecondL.style.left = (parseInt(locationLeftSecondL)) + "px";
    }


    // Verander kleur van letters

    // Blauw
    // Bron timer: https://flaviocopes.com/javascript-timers/
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



    // Toggle blendmode op letter
    if ((logoK.classList.contains('selected')) && (e.keyCode === 84)) {
        logoK.classList.toggle('blend');
    }
    if ((logoN.classList.contains('selected')) && (e.keyCode === 84)) {
        logoN.classList.toggle('blend');
    }
    if ((logoO.classList.contains('selected')) && (e.keyCode === 84)) {
        logoO.classList.toggle('blend');
    }
    if ((logoFirstL.classList.contains('selected')) && (e.keyCode === 84)) {
        logoFirstL.classList.toggle('blend');
    }
    if ((logoSecondL.classList.contains('selected')) && (e.keyCode === 84)) {
        logoSecondL.classList.toggle('blend');
    }



    // Maak letters groter
    if (logoK.classList.contains('selected') && e.keyCode === 221) {
        fontSizeK += 1;
        logoK.style.fontSize = (parseInt(fontSizeK)) + "rem";
    }
    if (logoN.classList.contains('selected') && e.keyCode === 221) {
        fontSizeN += 1;
        logoN.style.fontSize = (parseInt(fontSizeN)) + "rem";
    }
    if (logoO.classList.contains('selected') && e.keyCode === 221) {
        fontSizeO += 1;
        logoO.style.fontSize = (parseInt(fontSizeO)) + "rem";
    }
    if (logoFirstL.classList.contains('selected') && e.keyCode === 221) {
        fontSizeFirstL += 1;
        logoFirstL.style.fontSize = (parseInt(fontSizeFirstL)) + "rem";
    }
    if (logoSecondL.classList.contains('selected') && e.keyCode === 221) {
        fontSizeSecondL += 1;
        logoSecondL.style.fontSize = (parseInt(fontSizeSecondL)) + "rem";
    }



    // Maak letters kleiner
    if (logoK.classList.contains('selected') && e.keyCode === 219) {
        fontSizeK -= 1;
        logoK.style.fontSize = (parseInt(fontSizeK)) + "rem";
    }
    if (logoN.classList.contains('selected') && e.keyCode === 219) {
        fontSizeN -= 1;
        logoN.style.fontSize = (parseInt(fontSizeN)) + "rem";
    }
    if (logoO.classList.contains('selected') && e.keyCode === 219) {
        fontSizeO -= 1;
        logoO.style.fontSize = (parseInt(fontSizeO)) + "rem";
    }
    if (logoFirstL.classList.contains('selected') && e.keyCode === 219) {
        fontSizeFirstL -= 1;
        logoFirstL.style.fontSize = (parseInt(fontSizeFirstL)) + "rem";
    }
    if (logoSecondL.classList.contains('selected') && e.keyCode === 219) {
        fontSizeSecondL -= 1;
        logoSecondL.style.fontSize = (parseInt(fontSizeSecondL)) + "rem";
    }


    // Maak letters groter responsive
    // Bron window.matchMedia: http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml
    if (logoK.classList.contains('selected') && e.keyCode === 221 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveK += 1;
        logoK.style.fontSize = (parseInt(fontSizeResponsiveK)) + "rem";
    }
    if (logoN.classList.contains('selected') && e.keyCode === 221 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveN += 1;
        logoN.style.fontSize = (parseInt(fontSizeResponsiveN)) + "rem";
    }
    if (logoO.classList.contains('selected') && e.keyCode === 221 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveO += 1;
        logoO.style.fontSize = (parseInt(fontSizeResponsiveO)) + "rem";
    }
    if (logoFirstL.classList.contains('selected') && e.keyCode === 221 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveFirstL += 1;
        logoFirstL.style.fontSize = (parseInt(fontSizeResponsiveFirstL)) + "rem";
    }
    if (logoSecondL.classList.contains('selected') && e.keyCode === 221 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveSecondL += 1;
        logoSecondL.style.fontSize = (parseInt(fontSizeResponsiveSecondL)) + "rem";
    }


    // Maak letters kleiner responsive
    if (logoK.classList.contains('selected') && e.keyCode === 219 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveK -= 1;
        logoK.style.fontSize = (parseInt(fontSizeResponsiveK)) + "rem";
    }
    if (logoN.classList.contains('selected') && e.keyCode === 219 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveN -= 1;
        logoN.style.fontSize = (parseInt(fontSizeResponsiveN)) + "rem";
    }
    if (logoO.classList.contains('selected') && e.keyCode === 219 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveO -= 1;
        logoO.style.fontSize = (parseInt(fontSizeResponsiveO)) + "rem";
    }
    if (logoFirstL.classList.contains('selected') && e.keyCode === 219 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveFirstL -= 1;
        logoFirstL.style.fontSize = (parseInt(fontSizeResponsiveFirstL)) + "rem";
    }
    if (logoSecondL.classList.contains('selected') && e.keyCode === 219 && window.matchMedia('(max-width: 648px)').matches) {
        fontSizeResponsiveSecondL -= 1;
        logoSecondL.style.fontSize = (parseInt(fontSizeResponsiveSecondL)) + "rem";
    }
}

document.onkeydown = changeLetters;

var navButtonOne = document.querySelector('nav ul li:nth-of-type(1)');
var navButtonTwo = document.querySelector('nav ul li:nth-of-type(2)');
var navButtonThree = document.querySelector('nav ul li:nth-of-type(3)');
var navButtonFour = document.querySelector('nav ul li:nth-of-type(4)');
var buttonRed = document.querySelector('body > ul:nth-of-type(1) > li:nth-of-type(1)');
var buttonOrange = document.querySelector('body > ul:nth-of-type(1) > li:nth-of-type(2)');
var buttonYellow = document.querySelector('body > ul:nth-of-type(1) > li:nth-of-type(3)');
var buttonGreen = document.querySelector('body > ul:nth-of-type(1) > li:nth-of-type(4)');
var buttonPurple = document.querySelector('body > ul:nth-of-type(1) > li:nth-of-type(5)');
var buttonBlue = document.querySelector('body > ul:nth-of-type(1) > li:nth-of-type(6)');
var buttonPlus = document.querySelector('body > ul:nth-of-type(2) > li:nth-of-type(1)');
var buttonMinus = document.querySelector('body > ul:nth-of-type(2) > li:nth-of-type(2)');
var buttonLeft = document.querySelector('body > ul:nth-of-type(3) > li:nth-of-type(1)');
var buttonRight = document.querySelector('body > ul:nth-of-type(3) > li:nth-of-type(2)');
var buttonUp = document.querySelector('body > ul:nth-of-type(3) > li:nth-of-type(3)');
var buttonDown = document.querySelector('body > ul:nth-of-type(3) > li:nth-of-type(4)');
var subMenuOne = document.querySelector('body > ul:nth-of-type(1)');
var subMenuTwo = document.querySelector('body > ul:nth-of-type(2)');
var subMenuThree = document.querySelector('body > ul:nth-of-type(3)');
var windowBlinds = document.querySelector('figure > svg:nth-of-type(1) > path');
var blindsPartOne = document.querySelector('figure > svg:nth-of-type(1) > g:nth-of-type(1) > rect');
var blindsPartTwo = document.querySelector('figure > svg:nth-of-type(1) > g:nth-of-type(3)');
var bodyElement = document.querySelector('body');

var openSubMenuOne = function () {
    subMenuOne.classList.toggle('visible');
    subMenuTwo.classList.remove('visible');
    subMenuThree.classList.remove('visible');
}

navButtonOne.addEventListener('click', openSubMenuOne);

var openSubMenuTwo = function () {
    subMenuTwo.classList.toggle('visible');
    subMenuThree.classList.remove('visible');
    subMenuOne.classList.remove('visible');
}

navButtonThree.addEventListener('click', openSubMenuTwo);

var openSubMenuThree = function () {
    subMenuThree.classList.toggle('visible');
    subMenuTwo.classList.remove('visible');
    subMenuOne.classList.remove('visible');
}

navButtonFour.addEventListener('click', openSubMenuThree);

var changeMobileRed = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.add('red');
        logoK.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.add('red');
        logoN.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.add('red');
        logoO.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.classList.add('red');
        logoFirstL.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.add('red');
        logoSecondL.classList.remove('blue', 'yellow', 'green', 'orange', 'purple');
        setTimeout(redTimer, 600);
    }
}

buttonRed.addEventListener('click', changeMobileRed);

var changeMobileOrange = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.add('orange');
        logoK.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.add('orange');
        logoN.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.add('orange');
        logoO.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.classList.add('orange');
        logoFirstL.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.add('orange');
        logoSecondL.classList.remove('blue', 'red', 'yellow', 'purple', 'green');
        setTimeout(orangeTimer, 600);
    }
}

buttonOrange.addEventListener('click', changeMobileOrange);

var changeMobileYellow = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.add('yellow');
        logoK.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.add('yellow');
        logoN.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.add('yellow');
        logoO.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.classList.add('yellow');
        logoFirstL.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.add('yellow');
        logoSecondL.classList.remove('blue', 'red', 'green', 'orange', 'purple');
        setTimeout(yellowTimer, 600);
    }
}

buttonYellow.addEventListener('click', changeMobileYellow);

var changeMobileGreen = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.add('green');
        logoK.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.add('green');
        logoN.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.add('green');
        logoO.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.classList.add('green');
        logoFirstL.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.add('green');
        logoSecondL.classList.remove('blue', 'red', 'yellow', 'orange', 'purple');
        setTimeout(greenTimer, 600);
    }
}

buttonGreen.addEventListener('click', changeMobileGreen);

var changeMobilePurple = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.add('purple');
        logoK.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.add('purple');
        logoN.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.add('purple');
        logoO.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.classList.add('purple');
        logoFirstL.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.add('purple');
        logoSecondL.classList.remove('blue', 'red', 'yellow', 'orange', 'green');
        setTimeout(purpleTimer, 600);
    }
}

buttonPurple.addEventListener('click', changeMobilePurple);

var changeMobileBlue = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.add('blue');
        logoK.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.add('blue');
        logoN.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.add('blue');
        logoO.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if (logoFirstL.classList.contains('selected')) {
        logoFirstL.classList.add('blue');
        logoFirstL.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.add('blue');
        logoSecondL.classList.remove('red', 'yellow', 'green', 'orange', 'purple');
        setTimeout(blueTimer, 600);
    }
}

buttonBlue.addEventListener('click', changeMobileBlue);

var changeMobilePlus = function () {
    if (logoK.classList.contains('selected')) {
        fontSizeResponsiveK += 1;
        logoK.style.fontSize = (parseInt(fontSizeResponsiveK)) + "rem";
    }
    if (logoN.classList.contains('selected')) {
        fontSizeResponsiveN += 1;
        logoN.style.fontSize = (parseInt(fontSizeResponsiveN)) + "rem";
    }
    if (logoO.classList.contains('selected')) {
        fontSizeResponsiveO += 1;
        logoO.style.fontSize = (parseInt(fontSizeResponsiveO)) + "rem";
    }
    if (logoFirstL.classList.contains('selected')) {
        fontSizeResponsiveFirstL += 1;
        logoFirstL.style.fontSize = (parseInt(fontSizeResponsiveFirstL)) + "rem";
    }
    if (logoSecondL.classList.contains('selected')) {
        fontSizeResponsiveSecondL += 1;
        logoSecondL.style.fontSize = (parseInt(fontSizeResponsiveSecondL)) + "rem";
    }
}

buttonPlus.addEventListener('click', changeMobilePlus);

var changeMobileMinus = function () {
    if (logoK.classList.contains('selected')) {
        fontSizeResponsiveK -= 1;
        logoK.style.fontSize = (parseInt(fontSizeResponsiveK)) + "rem";
    }
    if (logoN.classList.contains('selected')) {
        fontSizeResponsiveN -= 1;
        logoN.style.fontSize = (parseInt(fontSizeResponsiveN)) + "rem";
    }
    if (logoO.classList.contains('selected')) {
        fontSizeResponsiveO -= 1;
        logoO.style.fontSize = (parseInt(fontSizeResponsiveO)) + "rem";
    }
    if (logoFirstL.classList.contains('selected')) {
        fontSizeResponsiveFirstL -= 1;
        logoFirstL.style.fontSize = (parseInt(fontSizeResponsiveFirstL)) + "rem";
    }
    if (logoSecondL.classList.contains('selected')) {
        fontSizeResponsiveSecondL -= 1;
        logoSecondL.style.fontSize = (parseInt(fontSizeResponsiveSecondL)) + "rem";
    }
}

buttonMinus.addEventListener('click', changeMobileMinus);

var changeMobileLeft = function () {
    if (logoK.classList.contains('selected')) {
        locationLeftK -= 10;
        logoK.style.left = (parseInt(locationLeftK)) + "px";
    }
    if (logoN.classList.contains('selected')) {
        locationLeftN -= 10;
        logoN.style.left = (parseInt(locationLeftN)) + "px";
    }
    if (logoO.classList.contains('selected')) {
        locationLeftO -= 10;
        logoO.style.left = (parseInt(locationLeftO)) + "px";
    }
    if (logoFirstL.classList.contains('selected')) {
        locationLeftFirstL -= 10;
        logoFirstL.style.left = (parseInt(locationLeftFirstL)) + "px";
    }
    if (logoSecondL.classList.contains('selected')) {
        locationLeftSecondL -= 10;
        logoSecondL.style.left = (parseInt(locationLeftSecondL)) + "px";
    }
}

buttonLeft.addEventListener('click', changeMobileLeft);

var changeMobileRight = function () {
    if (logoK.classList.contains('selected')) {
        locationLeftK += 10;
        logoK.style.left = (parseInt(locationLeftK)) + "px";
    }
    if (logoN.classList.contains('selected')) {
        locationLeftN += 10;
        logoN.style.left = (parseInt(locationLeftN)) + "px";
    }
    if (logoO.classList.contains('selected')) {
        locationLeftO += 10;
        logoO.style.left = (parseInt(locationLeftO)) + "px";
    }
    if (logoFirstL.classList.contains('selected')) {
        locationLeftFirstL += 10;
        logoFirstL.style.left = (parseInt(locationLeftFirstL)) + "px";
    }
    if (logoSecondL.classList.contains('selected')) {
        locationLeftSecondL += 10;
        logoSecondL.style.left = (parseInt(locationLeftSecondL)) + "px";
    }
}

buttonRight.addEventListener('click', changeMobileRight);

var changeMobileUp = function () {
    if (logoK.classList.contains('selected')) {
        locationTopK -= 10;
        logoK.style.top = (parseInt(locationTopK)) + "px";
    }
    if (logoN.classList.contains('selected')) {
        locationTopN -= 10;
        logoN.style.top = (parseInt(locationTopN)) + "px";
    }
    if (logoO.classList.contains('selected')) {
        locationTopO -= 10;
        logoO.style.top = (parseInt(locationTopO)) + "px";
    }
    if (logoFirstL.classList.contains('selected')) {
        locationTopFirstL -= 10;
        logoFirstL.style.top = (parseInt(locationTopFirstL)) + "px";
    }
    if (logoSecondL.classList.contains('selected')) {
        locationTopSecondL -= 10;
        logoSecondL.style.top = (parseInt(locationTopSecondL)) + "px";
    }
}

buttonUp.addEventListener('click', changeMobileUp);

var changeMobileDown = function () {
    if (logoK.classList.contains('selected')) {
        locationTopK += 10;
        logoK.style.top = (parseInt(locationTopK)) + "px";
    }
    if (logoN.classList.contains('selected')) {
        locationTopN += 10;
        logoN.style.top = (parseInt(locationTopN)) + "px";
    }
    if (logoO.classList.contains('selected')) {
        locationTopO += 10;
        logoO.style.top = (parseInt(locationTopO)) + "px";
    }
    if (logoFirstL.classList.contains('selected')) {
        locationTopFirstL += 10;
        logoFirstL.style.top = (parseInt(locationTopFirstL)) + "px";
    }
    if (logoSecondL.classList.contains('selected')) {
        locationTopSecondL += 10;
        logoSecondL.style.top = (parseInt(locationTopSecondL)) + "px";
    }
}

buttonDown.addEventListener('click', changeMobileDown);

var changeMobileBlend = function () {
    if (logoK.classList.contains('selected')) {
        logoK.classList.toggle('blend');
    }
    if (logoN.classList.contains('selected')) {
        logoN.classList.toggle('blend');
    }
    if (logoO.classList.contains('selected')) {
        logoO.classList.toggle('blend');
    }
    if (logoFirstL.classList.contains('selected')){
        logoFirstL.classList.toggle('blend');
    }
    if (logoSecondL.classList.contains('selected')) {
        logoSecondL.classList.toggle('blend');
    }
}

navButtonTwo.addEventListener('click', changeMobileBlend);

var closeBlinds = function () {
    windowBlinds.classList.toggle('closedBlinds');
    blindsPartTwo.classList.toggle('closedBlinds');
    windowBlinds.classList.toggle('openBlinds');
    blindsPartTwo.classList.toggle('openBlinds');
    blindsPartOne.classList.toggle('blindsPartOne');
    blindsPartOne.classList.toggle('blindsPartTwo');
    bodyElement.classList.toggle('dark');
    bodyElement.classList.toggle('light');
}

windowBlinds.addEventListener('click', closeBlinds);