
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const license = require("./license.js");

const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
        },
        {
         type: "input",
        name: "title",
         message: "What is the title of your project?"
        },
        {
        type: "input",
        name: "projectUrl",
        message: "Enter your project URL."
        },
        {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
        },
        {
        type: "input",
        name: "use",
        message: "What is the intended usage for this product?"
        },   

        {
        type: "input",
        name: "contributors",
        message: "If you had any contributors, please list them here:"
          },
        {
        type: "input",
        name: "command",
        message: "What command should the user run to install all dependencies?"
        }, 
        {
        type: "checkbox",
        name: "FIXME",
        message: "What kind of license should your project have?",
        choices: ["MIT","GNU"]
        },
];



const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt(questions);
}


async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();
    console.log(answers);  
    const licenseInAnswers = {'github' : answers['github'], 
                              'title' : answers['title'],
                              'projectUrl' : answers['projectUrl'],
                              'description' : answers['description'],
                              'use' : answers['use'],
                              'contributors' : answers['contributors'], 
                              'command' : answers['command'], 
                              'FIXME' : license(answers['FIXME'])
                            };
    console.log(licenseInAnswers);
    
    const text = generateMarkdown(licenseInAnswers);


    await writeFileAsync("README.md", text);
    // await writeFileAsync("LICENSE",licenseInfo);

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }
}

init();

