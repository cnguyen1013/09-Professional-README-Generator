// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Project Title?'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'What is the Project Description?'
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the Installation Instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the Usage Information?'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the Contribution Guidelines?'
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'What are the Test Instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want?',
        choices: ['None', 'APACHE', 'GNU', 'MIT']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    }
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file generated successfully!');
        }
    });
}

// A function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {

        const data = {
            "title": response.title,
            "description": response.description,
            "installation": response.installation,
            "usage": response.usage,
            "guidelines": response.guidelines,
            "test": response.test,
            "license": response.license,
            "email": response.email,
            "github": response.github
        }

        writeToFile('README_deploy.md', generateMarkdown(data));
    })
    .catch((error) => 
        console.error(error));
}

// Function call to initialize app
init();
