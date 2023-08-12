const inquirer = require("inquirer");

function getInput() {
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

  return userInput;
}
module.exports = {
  getInput,
};
