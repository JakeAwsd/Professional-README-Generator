// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        message: 'Enter contribution guidelines:',
        name: 'guidelines',
      },
      {
        type: 'input',
        message: 'Enter instructions:',
        name: 'instructions',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`${fileName}.md`, `${generateMarkdown(data)}`, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
      // console.log(response);
      writeToFile('README', response);
    })
}

// Function call to initialize app
init();
