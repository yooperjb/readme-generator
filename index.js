// array of questions for user
const userQuestions = [userName, email, title, description, installation, usage, license, contributing, test, questions];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();

mockData = {
    userName: 'yooperjb',
    email: 'jason.barnes@humboldt.edu',
    title: 'README-generator',
    description: 'This README Generator creates a quality readme file using user input and formating the readme file using the answers provided.',
    installation: 'This project requies a few dependencies to function. Clone the working files on the Github repo to begin. Node.js must also be installed. This project also uses the inquirer.js module which can be installed using npm i inquirer.',
    usage: 'To use the readme-generator, run the index.js file in node. A series of questions about the project will be asked and used to generate a styled readme file.',
    license:'MIT License',
    contributing:'If you have interst in contributing to this project please contact me on github.',
    test:'To test the generator you can use the mock data file included in the project. You can alter the code to bypass the inquirer input and use the pre-configured data.',
    questions:'If you have any questions regarding this project please contact me at jason.barnes@humboldt.edu.'
}
