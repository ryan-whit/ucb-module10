const Employee = require('./Engineer');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern;
