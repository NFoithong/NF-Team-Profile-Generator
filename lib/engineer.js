const Employee = require('./employee');
class Engineer extends Employee {
    constructor(name, id, emailAddress, githubUsername) {
        super(name, id, emailAddress);
        this.githubUsername = githubUsername;
    }

    getGithubUsername() {
        // return emailAddress
        return this.githubUsername
    }
    getRole() {
        // return employee
        return "Engineer"
    }
}

module.exports = Engineer;