// generateReadme function populating the README.md
function generateMarkdown(answers) {
  return `
<h1>${answers.projectTitle}</h1>
<b>Name:</b> ${answers.name}<br/>
<b>GitHub Username:</b> ${answers.username}<br/>
<b>Email:</b> ${answers.email}<br/>
<b>Project's Repository:</b> ${answers.repository}<br/>

<p>&nbsp;</p>

**TABLE OF CONTENTS**<br/>
| [Description](#description) |
| [Installation](#installation) |
| [Usage](#usageInformation) |
| [Contribution](#contribution) |
| [Tests](#tests) |

**PROJECT DESCRIPTION**<br/>
${answers.description}

**INSTALLATION INSTRUCTIONS**<br/>
${answers.installation}

**USAGE**<br/>
${answers.usageInformation}

**USER CONTRIBUTION**<br/>
${answers.contribution}

**TESTS**<br/>
${answers.tests}

**LICENSE**<br/>
This application is protected under ${answers.license} license.<br/>
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />`;
};

module.exports = generateMarkdown;