// import modules
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const userQuestions = () => {
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'userName',
        message: 'What is your github user name (Required)',
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
            message: 'What is the project Repo name (Required)?',
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
            message: "Please enter your email (Required)",
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
            message: 'Enter the project Title (Required)',
            validate: titleInput => {
               if (titleInput) {
                   return true;
               } else {
                   console.log('Please enter the project title');
                   return false;
               }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the project description (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the project description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter information regarding project installation',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter information regarding project usage',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does the project use? Choose one.',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2','Unlicense','None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution information.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter any information regarding project tests.',
        },
    ])
};

// function to write README file
//function writeToFile(fileName, data) {
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

// function to initialize program
function init() {

}

// function call to initialize program
//init();
userQuestions()
    .then(projectData => {
        return generateMarkdown(mockData);
    })
    .then(markDownData => {
        console.log("MarkDown: ",markDownData);
        return writeToFile(markDownData);
    });

mockData = {
    userName: 'yooperjb',
    repoName: 'readme-generator',
    email: 'jason.barnes@humboldt.edu',
    title: 'README-generator',
    description: 'This README Generator creates a quality readme file using user input and formating the readme file using the answers provided.',
    installation: 'This project requires a few dependencies to function. Clone the working files from the Github repo to begin. Node.js must also be installed. This project also uses the inquirer.js module which can be installed using npm i inquirer.',
    usage: 'To use the readme-generator, run the index.js file in node. A series of questions about the project will be asked and used to generate a styled readme file.',
    license:'MIT',
    contributing:'If you have interst in contributing to this project please contact me on github.',
    test:'To test the generator you can use the mock data file included in the project. You can alter the code to bypass the inquirer input and use the pre-configured data.',
    questions:'If you have any questions regarding this project please contact me at jason.barnes@humboldt.edu.'
};
