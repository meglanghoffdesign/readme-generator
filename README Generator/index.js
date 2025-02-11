// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write test instructions for your application and provide examples on how to run them here:'
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data);
    console.log('README Created!');
  } catch (err) {
    console.log('Error occurred while writing the file:', err);
  }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      const markdownContent = generateMarkdown(data);
      writeToFile('README.md', markdownContent);
    });
  }
  

// Function call to initialize app
init();
