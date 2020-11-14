// function to generate markdown for README
function generateMarkdown(data) {
  console.log("Data made it!:",data);
  const {userName,email,title,description,installation,usage,license,contributing,test} = data;
  
  return `
  # ${title}

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
  ${license}

  `;
}

module.exports = generateMarkdown;
