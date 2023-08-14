const inquirer = require("inquirer");

async function getInput() {
  const userInput = await inquirer.prompt(questions);

  return userInput;
}
module.exports = {
  getInput,
};
