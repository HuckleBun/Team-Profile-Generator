const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const init = () => {
    return inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'Name of Team Manager'
        }, {
            type: 'text',
            name: 'employeeID',
            message: 'Employee ID'
        }, {
            type: 'text',
            name: 'email',
            message: 'Email'
        }, {
            type: 'text',
            name: 'officeNum',
            message: 'Office Number'
        });
}

init()