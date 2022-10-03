const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


class TeamBuilder {
	constructor() {
		this.manager = null;
		this.engineers = [];
		this.interns = [];
	}

	gatherInput() {
		self.askForManagerInput()
	}

	askForManagerInput() {
		inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "Please input the Manager's name."
				}
			])
			.then(val => {
				console.log("Manager's name: ", val.name);
				process.exit(0);
			})
	}
}

module.exports = TeamBuilder;
