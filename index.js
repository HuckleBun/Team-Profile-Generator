const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");

const employees = [];

const createManager = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'Name of Team Manager'
        }, {
            type: 'input',
            name: 'employeeID',
            message: 'Employee ID'
        }, {
            type: 'input',
            name: 'email',
            message: 'Email'
        }, {
            type: 'input',
            name: 'officeNum',
            message: 'Office Number'
        }])
        .then(answer => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            employees.push(manager);
            addEmployeePrompt();
        })
}

const addEmployeePrompt = () => {
    return inquirer
        .prompt({
            type: "list",
            name: "addEmployee",
            message: "Add Employee",
            choices: ["Engineer", "Intern"]
        })
        .then(answer => {
            if (answer === "Engineer") {
                addEmployee("Engineer");
            } else {
                addEmployee("Intern");
            }
        })
}

const addEmployee = (employee) => {
    if(employee === "Intern") {
        return inquirer
            .prompt([{
                type: "input",
                name: "Intern",
                message: "Intern"
            }])
    } else {
        return inquirer 
            .prompt([{
                type: "input",
                name: "Engineer",
                message: "Engineer"
            }])
    }
}

createManager();