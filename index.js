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
        fs.writeFile('myREADME.md', readmeContent(data), (err) => 
            err ? console.error(err) : console.log('Success! A README for your new project has been created!'))
    })

const readmeContent = ({title, description, installation, usage, tech, testing, contributing, license, author, email}) =>
    `# ${title}

    ## Description
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Technologies](#technologies)
    - [Testing](#testing)
    - [Contributing](#contributing)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## Technologies
    ${tech}
    
    ## Testing
    ${testing}
    
    ## Contributing
    ${contributing}
    
    ## License
    ${license}
    
    ## Contact
    For further information about this project, feel free to email me at ${email}.
    This project can be found at (github.com/${author}).`
;


    