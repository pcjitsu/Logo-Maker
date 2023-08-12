// TODO: Include packages needed for this application
const fs = require("fs");
const { userInput, getInput } = require("./lib/input");
const { Triangle, Circle, Square } = require("./lib/shapes");

//function to create file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
  });
}

function generateLogo() {
  const userInput = getInput();

  let shape;

  shape.setColor(userInput.shapeColor);

  const svgContent = shape.render();
  writeToFile("./lib/logo.svg", svgContent);
}

generateLogo();
