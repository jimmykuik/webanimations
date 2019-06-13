/*eslint-env browser*/

var navButtonOne = document.querySelector('nav ul li:nth-of-type(1)');
var navButtonTwo = document.querySelector('nav ul li:nth-of-type(2)');
var navButtonThree = document.querySelector('nav ul li:nth-of-type(3)');
var navButtonFour = document.querySelector('nav ul li:nth-of-type(4)');
var subMenuOne = document.querySelector('body > ul:nth-of-type(1)');
var subMenuTwo = document.querySelector('body > ul:nth-of-type(2)');
var subMenuThree = document.querySelector('body > ul:nth-of-type(3)');

var openSubMenuOne = function() {
    subMenuOne.classList.toggle('visible');
    subMenuTwo.classList.remove('visible');
    subMenuThree.classList.remove('visible');
}

navButtonOne.addEventListener('click', openSubMenuOne);

var openSubMenuTwo = function() {
    subMenuTwo.classList.toggle('visible');
    subMenuThree.classList.remove('visible');
    subMenuOne.classList.remove('visible');
}

navButtonThree.addEventListener('click', openSubMenuTwo);

var openSubMenuThree = function() {
    subMenuThree.classList.toggle('visible');
    subMenuTwo.classList.remove('visible');
    subMenuOne.classList.remove('visible');
}

navButtonFour.addEventListener('click', openSubMenuThree);