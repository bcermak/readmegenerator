// packages
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown");


// prmompts questions to create ReadMe content
const questions =  [ 
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
    ];

    // write file named "readmedraft" to differentiate from my own ReadMe
    function writeToFile(data) {
        fs.writeFile("ReadMeDraft.md", generateMarkdown(data), function (error) {
                if (error)
                    throw (error);
            })
        console.log("success")
    }
    
    // function to initialize program
    function init() {
        try {
            inquirer.prompt(questions)
                .then(function(data) {
                    console.log(data);
                    writeToFile(data);
                })
                .catch(function(error) {
                    console.log("Error Caught: " + error);
                })
        } catch (error2) {
            console.log("Error Caught: " + error2);
        }
    }
    
// initialize cont'd
init();