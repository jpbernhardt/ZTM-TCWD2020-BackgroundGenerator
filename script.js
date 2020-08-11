var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector(".randomGenBtn");
var body = document.getElementById("gradient");

var setGradient = () => {
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = body.style.background + ";";
}

// Random hex color code generator.
var randomHexColorCode = () => {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var newColorCode = "#" + randomColor;
  return newColorCode;
}

/* Calls the randomHexColorCode function, adds and updates the background
and color information with the new values. */
var randomColor = () => {
  color1.value = randomHexColorCode();
  color2.value = randomHexColorCode();

  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColor);
randomColor();