// generateReadme function populating the README.md
function generateMarkdown(answers) {
  return `
<h1>${answers.projectTitle}</h1>

**TABLE OF CONTENTS**<br/>
| [Description](#description) |
| [Installation](#installation) |
| [Usage](#usage-information) |
| [Contribution](#contribution) |
| [Tests](#tests) |
| [License](#license) |
| [Questions](#questions) |

**PROJECT DESCRIPTION**<br/> 
${answers.description} {#description}

**INSTALLATION INSTRUCTIONS**<br/> 
${answers.installation} {#installation}

**USAGE**<br/> 
${answers.usageInformation} {#usage-information}

**USER CONTRIBUTION}**<br/> 
${answers.contribution} {#contribution}

**TESTS {#test}**<br/> 
${answers.tests} {#test}

**LICENSE**<br/> 
This application is covered under ${answers.license} license.<br/>
![badge](https://img.shields.io/badge/license-${answers.license}-blue)
<br /> {#license}

**QUESTIONS?**<br/> 
If you have any question, please contact ${answers.name} at ${answers.email}<br/>
<b>GitHub Username:</b> ${answers.username}<br/>
<b>Project's GitHub Repository:</b> ${answers.repository} {#questions}

`;
};

module.exports = generateMarkdown;