const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const createHTML = require("./src/generateHTML.js")

const employees = [];
const currentIds = []

const createManager = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "Name of Team Manager:",
            validate: answer => {
                if (answer !== "") {
                  return true;
                }
                return "Please enter a name.";
              }      
        }, {
            type: 'number',
            name: 'id',
            message: "Manager's Employee ID:",
            validate: answer => {
                if (currentIds.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
                } else {
                return true;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: "Manager's Email:"
        }, {
            type: 'number',
            name: 'officeNumber',
            message: "Manager's Office Number:"
        }])
        .then(answer => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            employees.push(manager);
            currentIds.push(answer.id);
            addEmployeePrompt();
        })
}

const addEmployee = (employee) => {
    if(employee === "Intern") {
        return inquirer
            .prompt([{
                type: "input",
                name: "name",
                message: "Intern's Name:",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a name.";
                  }
            }, {
                type: "number",
                name: "id",
                message: "Intern's Employee ID:",
                validate: answer => {
                    if (currentIds.includes(answer)) {
                    return "This ID is already taken. Please enter a different number.";
                    } else {
                    return true;
                    }
                }
            }, {
                type: "input",
                name: "email",
                message: "Intern's Email:"
            }, {
                type: "input",
                name: "school",
                message: "Intern's School:"
            }])
            .then(answer => {
                const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
                employees.push(intern)
                currentIds.push(answer.id);
                addEmployeePrompt()
            })
    } else {
        return inquirer 
            .prompt([{
                type: "input",
                name: "name",
                message: "Engineer's Name:",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a name.";
                  }
            }, {
                type: "number",
                name: "id",
                message: "Engineer's Employee ID:",
                validate: answer => {
                    if (currentIds.includes(answer)) {
                    return "This ID is already taken. Please enter a different number.";
                    } else {
                    return true;
                    }
                }
            }, {
                type: "input",
                name: "email",
                message: "Engineer's Email:"
            }, {
                type: "input",
                name: "github",
                message: "Engineer's Github Username:"
            }])
            .then(answer => {
                const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
                employees.push(engineer)
                currentIds.push(answer.id);
                addEmployeePrompt()
            })
    }
}

const addEmployeePrompt = () => {
    return inquirer
        .prompt({
            type: "list",
            name: "addEmployee",
            message: "Add Employee",
            choices: ["Engineer", "Intern", "Done"]
        })
        .then(answers => {
            if (answers.addEmployee === "Engineer") {
                addEmployee("Engineer");
            } else if(answers.addEmployee === "Intern") {
                addEmployee("Intern");
            } else {
                confirmDone();
                return
            }
        })
}

const confirmDone = () => {
    return inquirer
        .prompt({
            type: "confirm",
            name: "confirm",
            message: "Are you sure you want to be done?"
        })
        .then(answer => {
            if(answer.confirm) {
                fs.writeFileSync("./dist/teamProfile.html", createHTML(employees), "utf-8")
            } else {
                addEmployeePrompt();
            }
        })
}

createManager();