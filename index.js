const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hello! This application will generate a README file for your new project. What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your new project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How will you install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How will your project function?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Which technologies will your project use?',
            name: 'tech',
        },
        {
            type: 'input',
            message: 'How will your project be tested?',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'How can someone contribute to this project?',
            name: 'contributing',
        },
        {
            type: 'list',
            message: 'Under which license will your project be covered?',
            name: 'license',
            choices: ['MIT', 'ISC'],
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'author',
        },
        {
            type: 'input',
            message: 'Please provide a good email address where you can be reached for additional questions about your new project.',
            name: 'email',
        }
    ])
    .then((data) => {
        
    })