const Employee = require('./employee');
class Intern extends Employee {
    constructor(name, id, emailAddress, school) {
        super(name, id, emailAddress);
        this.school = school;
    }

    getSchool() {
        // return emailAddress
        return this.school
    }
    getRole() {
        // return employee
        return this.role = "Intern"
    }
}

module.exports = Intern;