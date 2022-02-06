const Employee = require('./employee');
class Manager extends Employee {
    constructor(name, id, emailAddress, officeNumber) {
        super(name, id, emailAddress);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        // return emailAddress
        return this.officeNumber
    }
    getRole() {
        // return employee
        return "Manager"
    }
}

module.exports = Manager;