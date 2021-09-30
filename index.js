const fs = require('fs');
const inquirer = require('inquirer');

const licenses = require('./licenses.js');

const moment = require('moment');
const copyrightYear = moment().format('YYYY');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hello! This application will generate a README file for your new project. As author, please enter your first and last name.',
            name: 'fullname',
        },
        {
            type: 'input',
            message: 'What is the title of your project? (required)',
            name: 'title',
            validate: (input) => {
                if (input === '') {
                    return console.log("Please enter a title for your new project.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Describe your new project. What is your project's purpose and how does it work? (required)",
            name: 'description',
            validate: (input) => {
                if (input === '') {
                    return console.log("A description of your project is required for this README.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Describe the installation process for your project. (optional)',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how a user should utilize or interact with your project. (optional)',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How was/can your project be tested? (optional)',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'How can users or other developers contribute to this project? (optional)',
            name: 'contributing',
        },
        {
            type: 'list',
            message: 'Under which license will your project be covered?',
            name: 'license',
            choices: ['MIT', 'ISC', 'Apache 2.0', 'BSD 3-Clause'],
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username. (required)',
            name: 'author',
            validate: (input) => {
                if (input === '') {
                    return console.log("Please provide your GitHub username as author of this README.")
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide an email address where you can be reached for additional questions about your new project. (required)',
            name: 'email',
            validate: (input) => {
                if (input === '') {
                    return console.log("An email address for contact purposes is required to finish this README.")
                } else {
                    return true;
                }
            }
        }
    ])
    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

        fs.writeFile(filename, readmeContent(data), (err) => 
            err ? console.error(err) : console.log('Success! A README for your new project has been created.'))
    })


// function licenseforReadme() {
//     if (inquirer.prompt.license === 'MIT') {
//         return licenses.licenseMIT;
//     } else {
//         return licenses.licenseISC;
//     }
// };


readmeContent = (data) =>

`# ${data.title}

## Description
${data.description}

[!License]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Testing
${data.testing}

## Contributing
${data.contributing}

## License
\u00A9 ${copyrightYear} ${data.fullname}

This project is protected under the ${data.license} license. For more information, please visit (opensource.org/licenses).

## Contact
This project can be found at (github.com/${data.author}).
For further information about this project, feel free to email me at ${data.email}.`
;


    