// function to generate markdown for README
function generateMarkdown(data) {
  console.log("Data made it!:",data);
  const {userName,repoName,email,title,description,installation,usage,license,contributing,test} = data;
  
  return `
  # ${title}

  ![${title}](https://img.shields.io/github/languages/top/${userName}/${repoName}) ![${license}](https://img.shields.io/badge/license-${license}-blue)

  ## Description 
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
    
  ## Installation
  ${installation}
    
  ## Usage
  ${usage}

  ## Credits
  ${contributing}

  ## License
  ${generateLicense(license)}

  `;
}

const generateLicense = (license) => {
  let option = licenses.find(option => option.name === license);
  return `
  This project is licensed under the [${option.name}](${option.url}) license. Click the link for more information about the license.
  `
};

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