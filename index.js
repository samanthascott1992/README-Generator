// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

// // Activity 06

// var fs = require("fs");

// fs.writeFile("log.txt", process.argv[2], function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!");

// });



const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
        {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
        },
        {
        type: "input",
        name: "project-url",
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
        name: "FIX ME",
        message: "What kind of license should your project have?"
        },
        {
        type: "input",
        name: "command",
        message: "What command should I run to install all dependencies?"
        },

  ]);
}



async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();
