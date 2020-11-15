// import modules
//const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const userQuestions = () => {
    console.log(`
    ==================================
    Please Fill in project information.
    All questions are required.
    ==================================
    `);
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'userName',
        message: 'What is your github user name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub user name!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'What is the project Repo name?',
            validate: repoNameInput => {
                if (repoNameInput){
                    return true;
                }else{
                    console.log("Please enter the project Repo name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email.",
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project Title.',
            validate: titleInput => {
               if (titleInput) {
                   return true;
               } else {
                   console.log('Please enter the project title.');
                   return false;
               }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the project description.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter information regarding project installation',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter project install info.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter information regarding project usage',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter project usage info.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does the project use? Choose one.',
            choices: [
                {name:'MIT',
                value: {
                    text: "MIT",
                    url: 'https://choosealicense.com/licenses/mit/',   
                    }
                },
                {name:'GNU GPLv3',
                value: {
                    text: 'GNU GPLv3',
                    url:'https://choosealicense.com/licenses/gpl-3.0/',
                    }
                },
                {name:'Apache 2',
                value: {
                    text: 'Apache 2',
                    url: 'https://choosealicense.com/licenses/apache-2.0/', 
                    }
                },
                {name:'Unlicense',
                value: {
                    text:'Unlicense',
                    url: 'https://choosealicense.com/licenses/unlicense/',
                    }
                },
                {name: 'None',
                value: {
                    text: 'None',
                    url: 'https://choosealicense.com/no-permission/',
                    }
                },
            ]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter any information regarding project tests.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter project testing info.');
                    return false;
                }
            }
        },
    ])
};

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        // if error log error
        if (err) {
            console.log(err);
            return;
        }
        console.log("File Written!");  
    })
};

userQuestions()
    .then(projectData => {
        return generateMarkdown(mockData);
        // return generateMarkdown(projectData);
    })
    .then(markDownData => {
        console.log("MarkDown: ",markDownData);
        return writeToFile(markDownData);
    });

mockData = {
    userName: 'yooperjb',
    repoName: 'readme-generator',
    email: 'jason.barnes@humboldt.edu',
    title: 'README Generator',
    description: 'This README Generator creates a quality readme file utilizing user input and formats the readme file using the answers provided. It creates a header for the title, description, table of contents, installation, usage, contribution, license, tests, and question sections. Badges are created for the top language used and license chosen for hte project. Links are created dynamically for the user GitHub page, email, project license, and bug and feature submissions for the project repo. <br />The application uses validation to check for values and requires that all user input fields are provided information. ',
    installation: 'This project requires package dependencies to function. Clone the working files from the Github repo to begin. Because this project takes CLI input, Node.js must also be installed. It also uses the inquirer.js module for input questions which can be installed by using: <br /> npm i inquirer <br />',
    usage: 'To use the readme-generator, first install any dependencies then run the index.js file in node. A series of questions about the project will be asked and used to generate a beautifully styled and organized readme file.',
    license:{
        text: "MIT",
        url: 'https://choosealicense.com/licenses/mit/',   
        },
    test:'To test the generator you can use the mock data file included in the project. You can alter the code to bypass the inquirer input and use the pre-configured data.',
};
