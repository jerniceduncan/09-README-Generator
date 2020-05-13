function generateMarkdown(answers) {
  return `
  #README.md_Generator
 ${answers.email}

 ${answers.avatar_url}

 ${answers.askProjectName}

 ${answers.askProjectDescription}

 ${answers.askProjectTableOfContents}

 ${answers.askProjectHomepage}

 ${answers.askLicenseName}

 ${answers.askContributingUrl}

 ${answers.askInstallCommand}

 ${answers.test}

[![badge](https://img.shields.io/badge/Github-Project-brightgreen)

`;
}

module.exports = generateMarkdown;
