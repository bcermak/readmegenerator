// packages
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');



const questions = 

inquirer
    .prompt([ 
       {
        type: "input",
        name: "Title",
        message: "What would you like to use as your ReadMe Title?"
       
      },
      {
        type: "input",
        name: "Description",
        message: "Please provide a brief description"
      },
      {
        type: "checkbox",
        name: "Table",
        message: "What will be in the Table of Contents?",
        choices: ["Installation", 
                  "Table of Contents",
                  "Installation",
                  "Usage",
                  "License",
                  "Contributing",
                  "Tests",
                  "Questions",
                 ]
      },
      {
        type: "input",
        name: "Installation",
        message: "What steps are required for installation?"
      },
      {
        type: "input",
        name: "Usage",
        message: "Please provide examples of usage for you project"
      },
      {
        type: "list",
        name: "License",
        message: "Please select a license for your project",
        choices: ["License A", "License B", "License C", "License D"]
      },
      {
        type: "input",
        name: "Contributing",
        message: "Please list the names of who contributed to this project"
      },
      {
        type: "input",
        name: "Tests",
        message: "Please provide any examples of tests written for your application/examples of how to run them"
      },
      {
        type: "input",
        name: "Questions",
        message: "Do you have any questions?"
      },
    ]).then(function(responses){
        console.log(responses)
    })

    // function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
              return console.log(err);
            }
          
            console.log("Success! Your README.md file has been generated")
        });
    }
    

// function to initialize program
function init() {

}

// function call to initialize program
init();
