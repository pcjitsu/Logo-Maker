const inquirer = require("inquirer");

function getUserInput() {
  const userInput = inquirer.prompt([
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
  ]);

  module.exports = {
    getUserInput,
  };
}
