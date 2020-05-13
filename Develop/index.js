// create a variable and require
const fs = require( 'fs' );
const util = require('util');
const inquirer = require( 'inquirer' );
const apiCall = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile); 



// create inquirer prompt
function promptUser(){
return inquirer.prompt
([
    {
        type: 'input',
        name: 'askProjectName',
        message: 'Enter a project title?'
    },
    {
        type: 'input',
        name: 'askGitHubUserName',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'askProjectDescription',
        message: 'Give a description of your project.'
    },
    {
        type: 'input',
        name: 'askProjectTableOfContents',
        message: `What is your project's Table of Contents if any?`
    },
    {
        type: 'input',
        name: 'askProjectHomepage',
        message: 'What is the URL address of your Demo?'
    },
    {
        type: 'list',
        name: 'askLicenseName',
        message: 'Choose your license.',
        choices: [
            "Apache License 2.0",
            "Academic Free License v3.0",
            "GNU General Public License v3.0",
            "ISC",
            "MIT License",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "The Unlicense"
        ]
    },
    {
        type: 'input',
        name: 'askContributingUrl',
        message: 'Who are contributors and their URL?'
    },
    {
        type: 'input',
        name: 'askInstallCommand',
        message: 'What are the installation instructions?'
    }, 
    {
        type: 'input',
        name: 'askUsage',
        message: 'How do users use this project?'
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Is Testing included?'
    },
 

])
};
 

async function init() {
try {
    const answers = await promptUser();
    const results = await apiCall(answers.gitHubUserName);
    answers.email = results.email;
    answers.avatar_url = results.avatar_url;
    const generateContent = generateMarkdown(answers);
     
    console.log(results);
    await writeFileAsync("README.md", generateContent);

    console.log("Successfully wrote to README.md");
  } catch(error) {
    console.log(error);
    };
 }
 init();


