class Employee {
    constructor(name, id, emailAddress) {
        this.name = name;
        this.id = id;
        this.emailAddress = emailAddress;
    }
    getName() {
        // return name
        return this.name
    }
    getId() {
        //return employeeId
        return this.id
    }
    getEmail() {
        // return emailAddress
        return this.emailAddress
    }
    getRole() {
        // return employee
        return this.role = "Employee"
    }
}

module.exports = Employee;