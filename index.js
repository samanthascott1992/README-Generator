
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: "FIXME",
        message: "What kind of license should your project have?"

        },
        {
        type: "input",
        name: "command",
        message: "What command should I run to install all dependencies?"
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
    const text = generateMarkdown(answers);

    await writeFileAsync("README.md", text);

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }
}

init();

