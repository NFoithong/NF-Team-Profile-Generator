const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateSite = require('./src/page-template.js');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const output = path.join(OUTPUT_DIR, 'index.html');

//create team arr 
const teamMembers = [];

//create prompt manager
const promptManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter your name (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter your employee ID (Required)',
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log('Please enter your employee ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'Enter your email address (Required)',
                validate: emailAddress => {
                    if (emailAddress) {
                        return true;
                    } else {
                        console.log('Please enter your email address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter your office number (Required)',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter your office number');
                        return false;
                    }
                }
            },
        ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.employeeId, answers.emailAddress, answers.officeNumber);
            teamMembers.push(manager);
            promptQuestion();
        })
};

//create prompt question
const promptQuestion = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'question',
            message: 'Please select which option would you like to continue with',
            choices: ['Add an engineer', 'Add an intern', 'Finish building a team']
        }])
        .then(selectedChoices => {
            switch (selectedChoices.question) {
                case 'Add an engineer':
                    promptEngineer();
                    break;
                case 'Add an intern':
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

//create prompt engineer
const promptEngineer = () => {
    console.log(`
    ==================
    Add a new engineer
    ==================
    `);

    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter the name of engineer? (Required)',
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log('Please enter the name of engineer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter employee ID (Required)',
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log('Please enter employee ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'Enter email address (Required)',
                validate: emailAddress => {
                    if (emailAddress) {
                        return true;
                    } else {
                        console.log('Please enter email address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'Enter Github Username (Required)',
                validate: githubUsername => {
                    if (githubUsername) {
                        return true;
                    } else {
                        console.log('Please enter Github Username');
                        return false;
                    }
                }
            },
        ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.employeeId, answers.emailAddress, answers.githubUsername);
            teamMembers.push(engineer);
            promptQuestion();
        })
};

//create prompt intern
const promptIntern = () => {
    console.log(`
    ================
    Add a new intern
    ================
    `);

    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Enter the name of intern? (Required)',
                validate: interName => {
                    if (interName) {
                        return true;
                    } else {
                        console.log('Please enter the name of intern!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter employee ID (Required)',
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log('Please enter employee ID');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'Enter email address (Required)',
                validate: emailAddress => {
                    if (emailAddress) {
                        return true;
                    } else {
                        console.log('Please enter email address');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter school name (Required)',
                validate: githubUsername => {
                    if (githubUsername) {
                        return true;
                    } else {
                        console.log('Please enter school name');
                        return false;
                    }
                }
            },
        ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.employeeId, answers.emailAddress, answers.school);
            teamMembers.push(intern);
            promptQuestion();
        })
};

//build team
const buildTeam = () => {
    console.log(`
    =========================
    Finished building a team!
    =========================
    `);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(output, generateSite(teamMembers), 'utf-8');
}

promptManager();