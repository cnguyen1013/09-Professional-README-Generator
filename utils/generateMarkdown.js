// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'APACHE') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GNU') {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else {
      return '';
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'APACHE') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
  } else {
      return '';
  }
}

// Afunction that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
      return `## License
  This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.guidelines}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, please feel free to contact me: ${data.email}
  My github profile is: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
