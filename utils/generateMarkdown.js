// function to generate markdown for README
function generateMarkdown(data) {
  console.log("Data made it!:",data);
  const {userName,repoName,email,title,description,installation,usage,license,test} = data;
  
  return `
  # ${title}

  ![${title}](https://img.shields.io/github/languages/top/${userName}/${repoName}) ![${license}](https://img.shields.io/badge/license-${license}-blue)

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

  * [Submit bugs and feature requests]('https://github.com/${userName}/${repoName}/issues')
  * Review [source code changes]('https://github.com/${userName}/${repoName}/pulls')

  ## License
  ${generateLicense(license)}

  ## Tests
  ${test}

  ### Questions
  Any questions or feedback regarding this project can be sent directly to my [email](mailto:${email}), or submitted as outlined in the [contributing](#contributing) section. This project and others can be found at my [Github page]('https://github.com/${userName}').

  `;
}

// generate license information based on license choice
const generateLicense = (license) => {
  let option = licenses.find(option => option.name === license);
  return `
  This project is licensed under the [${option.name}](${option.url}) license. Click the link for more information about the license.
  `
};

// license options with url
const licenses = [
    {name: 'MIT',
    url: 'https://choosealicense.com/licenses/mit/'},
    {name:'GNU GPLv3',
    url:'https://choosealicense.com/licenses/gpl-3.0/'},
    {name:'Apache 2',
    url:'https://choosealicense.com/licenses/apache-2.0/'},
    {name:'Unlicense',
    url:'https://choosealicense.com/licenses/unlicense/'},
    {name:'None',
    url:'https://choosealicense.com/no-permission/'}
  ]; 
  
module.exports = generateMarkdown;