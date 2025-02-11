// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)';
    case 'GPL 3.0':
      return '![GPL 3.0 License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
    case 'Apache 2.0':
      return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `## License

This project is licensed under the ${license} License.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  
  return `
### ${data.title}

## Description
${data.description}

## Lisence Badge
${licenseBadge}

## Table of Contents
- [Description](#description)
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

## License
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [https://github.com/${data.githubUsername}](https://github.com/${data.githubUsername}).
  `;
}

export default generateMarkdown;
