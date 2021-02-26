// generateReadme function populating the README.md
function generateMarkdown(answers) {
  return `
<h1>${answers.projectTitle}</h1>
${answers.name}<br/>
${answers.username}<br/>
${answers.email}<br/>
${answers.repository}<br/>

<p>&nbsp;</p>

**TABLE OF CONTENTS**
| [Description](#description) |
| [Installation](#installation) |
| [Usage](#usageInformation) |
| [Contribution](#contribution) |
| [Tests](#tests) |

<p>&nbsp;</p>

**PROJECT DESCRIPTION**
${answers.description}

<p>&nbsp;</p>

**INSTALLATION INSTRUCTIONS**
${answers.installation}

<p>&nbsp;</p>

**USAGE**
${answers.usageInformation}

<p>&nbsp;</p>

**USER CONTRIBUTION**
${answers.contribution}

<p>&nbsp;</p>

**TESTS**
${answers.tests}

<p>&nbsp;</p>

**LICENSE**
This application is protected under ${answers.license} license.<br/>
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />`;
};

module.exports = generateMarkdown;