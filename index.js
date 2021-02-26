const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "repository",
            message: "What is your project's GitHub repository?",
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project",
        },
        {
            type: "input",
            name: "installation",
            message: "Provide instructions for the installation process (optional)",
        },
        {
            type: "input",
            name: "usageInformation",
            message: "What will this project be used for?",
        },
        {
            type: "input",
            name: "contribution",
            message: "Explain how users can contribute to your project (optional)",
        },
        {
            type: "input",
            name: "tests",
            message: "Explain how to test your application (optional)",
        },
        {
            type: "list",
            name: "license",
            message: "Choose one of the license below:",
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
        },
    ])
}

async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);

        // Write new README.md to dist directory
        await writeFileAsync('./utils/README.md', generateContent);
        console.log('Successfully wrote to README.md');

    }   catch(error) {
        console.log(error);
    }
  };
  
  init(); 