// TODO: Include packages needed for this application
const fs = require("fs");
const { userInput, getInput } = require("./lib/input");
const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color (keyword or hex number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Please select the shape below",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color (keyword or hex number):",
  },
];

//function to create file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
  });
}

async function generateLogo() {
  const userInput = await inquirer.prompt(questions);

  let shape;

  switch (userInput.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Circle":
      shape = new Circle();
      break;
    case "Square":
      shape = new Square();
      break;
    default:
      console.log("Err");
  }

  shape.setColor(userInput.shapeColor);

  const svgContent = shape.render();
  writeToFile("./lib/logo.svg", svgContent);
}

generateLogo();
