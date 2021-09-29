const fs = require('fs');
const inquirer = require('inquirer');

const licenses = require('./licenses.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hello! This application will generate a README file for your new project. Please enter your first and last name.',
            name: 'fullname',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
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
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

        // readmeContent(data);

        // function licenseText() {
        //     if (data.license === 'MIT') {
        //         return licenses.licenseMIT;
        //     } else {
        //         return licenses.licenseISC;
        //     }
        // }

        // licenseText;

        fs.writeFile(filename, readmeContent(data), (err) => 
            err ? console.error(err) : console.log('Success! A README for your new project has been created!'))
    })

readmeContent = (data) =>
`# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Technologies
${data.tech}

## Testing
${data.testing}

## Contributing
${data.contributing}

## License
Copyright ${data.fullname}

${data.license}

## Contact
This project can be found at (github.com/${data.author}).
For further information about this project, feel free to email me at ${data.email}.`
;


    