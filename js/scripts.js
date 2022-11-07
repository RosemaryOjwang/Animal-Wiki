window.onload = function()  {
  //We get the form element
const form = document.querySelector("form");
form.onsubmit = function(event) {
event.preventDefault();
//We access HTML elements; turtle, dog and cat options and assign the hidden class to them
let aboutTurtle = document.getElementById("turtle");
aboutTurtle.setAttribute("class", "hidden");
let aboutDog = document.getElementById("dog");
aboutDog.setAttribute("class", "hidden");
let aboutCat = document.getElementById("cat");
aboutCat.setAttribute("class", "hidden");


//get the value from the form
const animalChoice  = document.querySelector("input#animalChoice").value;


if (animalChoice === "cat")  {
  aboutCat.removeAttribute("class");
}
else if (animalChoice === "dog")  {
  aboutDog.removeAttribute("class");
}
else if (animalChoice === "turtle" )  {
  aboutTurtle.removeAttribute("class");
}
else {
  alert("Error");
}
}
}