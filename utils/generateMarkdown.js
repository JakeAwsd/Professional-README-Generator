// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `github license: (https://img.shields.io/badge/license-${license}-yellowgreen) `
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const addons = {
    tableofcontents: `  
    ${renderLicenseBadge(data.license)}
    ## Table of Contents (Optional)
  
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)`,

    installation: `
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    `,

    usage: `  
    Provide instructions and examples for use. Include screenshots as needed.
  
    To add a screenshot, create an image placeholder folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    License link: ${renderLicenseLink(data.license)}
    `,

    credits: `  
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.`,

    tests: `  
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
  }

  return `
  # Project title: ${data.title}

  ## Description

  ${addons.tableofcontents}

  ## Installation instructions

  ${addons.installation} 
  
  ## Usage information
  
  ${addons.usage}

  ${renderLicenseSection(data.license)}

  ## Credits
  ${addons.credits}
  
  ## Tests
  ${addons.tests}

`

}

module.exports = generateMarkdown;
