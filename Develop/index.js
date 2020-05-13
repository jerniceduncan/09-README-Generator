// create a variable and require

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api")

// create questions array
// copy and paste type, name , message add question inquirer
const questions = [
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
        name: 'askProjectName',
        message: 'Enter a project title?'
    },
    {
        type: 'input',
        name: 'askProjectName',
        message: 'Enter a project title?'
    },
    {
        type: 'input',
        name: 'askProjectName',
        message: 'Enter a project title?'
    },

    // 'askProjectVersion',
    // 'askProjectDescription',
    // 'askProjectHomepage',
    // 'askProjectDemoUrl',
    // 'askAuthorName',
    // 'askAuthorGithub'
    // 'askLicenseName',
    // 'askContributingUrl',
    // 'askInstallCommand',
    // 'askUsage',
    // 'askTestCommand'

];
// 

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error) =>{
        if (error) throw error;
        console.log('readme created sucessesfully');
    })
}

function init() {
    inquirer.prompt(questions).then(answers=> {
        console.log("Answers...", answers);
    let data = {...answers}
        const avatarPhoto = api(answers.askGitHubUserName);
        console.log(avatarPhoto)
        data.photo = avatarPhoto;
        const markDown = generateMarkDown (data);
        writeToFile("README.md", markdown);
    });
}

init();
