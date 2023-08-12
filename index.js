// TODO: Include packages needed for this application
const fs = require("fs");
const { userInput, getInput } = require("./lib/input");
const { Triangle, Circle, Square } = require("./lib/shapes");

function generateLogo() {
  const userInput = getInput();

  let shape;

  shape.setColor(userInput.shapeColor);

  const svgContent = shape.render();
  //
}

generateLogo();
