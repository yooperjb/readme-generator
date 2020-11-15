// function to generate markdown for README
function generateMarkdown(data) {
  
  const {userName,repoName,email,title,description,installation,usage,license,test} = data;

  return `
  # ${title}

  ![${title}](https://img.shields.io/github/languages/top/${userName}/${repoName}) ![${license.text}](https://img.shields.io/badge/license-${license.text}-blue)

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation
  ${installation}
    
  ## Usage
  ${usage}

  ## Contributing
  There are many ways to contribute to this project if you are interested. 

  * [Submit bugs and feature requests](https://github.com/${userName}/${repoName}/issues)
  * Review [source code changes](https://github.com/${userName}/${repoName}/pulls)

  ## License
  This project is licensed under the [${license.text}](${license.url}) license. Click the link for more information about the license.

  ## Tests
  ${test}

  ### Questions
  Any questions or feedback regarding this project can be sent directly to my [email](mailto:${email}), or submitted as outlined in the [contributing](#contributing) section. This project and others can be found at my [Github page]('https://github.com/${userName}').

  `;
} 
  
module.exports = generateMarkdown;