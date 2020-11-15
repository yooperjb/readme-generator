
  # README Generator

  ![README Generator](https://img.shields.io/github/languages/top/yooperjb/readme-generator) ![MIT](https://img.shields.io/badge/license-MIT-blue)

  ## Description
  This README Generator creates a quality readme file utilizing user input and formats the readme file using the answers provided. It creates a header for the title, description, table of contents, installation, usage, contribution, license, tests, and question sections. Badges are created for the top language used and license chosen for hte project. Links are created dynamically for the user GitHub page, email, project license, and bug and feature submissions for the project repo. <br />The application uses validation to check for values and requires that all user input fields are provided information.
  
  ***
  ![Project GIF](./assets/images/README_Generator.gif)
  ***
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation
  This project requires package dependencies to function. Clone the working files from the Github repo to begin. Because this project takes CLI input, Node.js must also be installed. It also uses the inquirer.js module for input questions which can be installed by using:
  
  ```md
  npm i inquirer
  ```
    
  ## Usage
  To use the readme-generator, first install any dependencies then run the index.js file in node. A series of questions about the project will be asked and used to generate a beautifully styled and organized readme file.

  ## Contributing
  There are many ways to contribute to this project if you are interested. 

  * [Submit bugs and feature requests]('https://github.com/yooperjb/readme-generator/issues')
  * Review [source code changes]('https://github.com/yooperjb/readme-generator/pulls')

  ## License
  This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license. Click the link for more information about the license.

  ## Tests
  The application hasn't been fully tested for all situations, however inquirer validation does work. If no entry is entered for a section a log will alert the user to enter information. To test the application without having to enter complete project data every time, the mock data provided in the mockData variable can be used. Just replace the argument in the generateMarkdown call to mockData as follows:

  ```md
  userQuestions()
    .then(projectData => {
        return generateMarkdown(mockData);
  ```

  ### Questions
  Any questions or feedback regarding this project can be sent directly to my [email](mailto:jason.barnes@humboldt.edu), or submitted as outlined in the [contributing](#contributing) section. This project and others can be found at my [Github page]('https://github.com/yooperjb').

  