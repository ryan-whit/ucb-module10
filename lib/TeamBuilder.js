const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class TeamBuilder {
  constructor() {
    this.manager = null;
    this.engineers = [];
    this.interns = [];
    this.id_counter = 1;
  }

  gatherInput() {
    this.getManagerInput();
  }

  getManagerInput() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please input the Manager's name.",
        },
        {
          type: "input",
          name: "email",
          message: "Please input the Manager's email.",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Please input the Manager's office number.",
        },
      ])
      .then((input) => {
        this.manager = new Manager(
          input.name,
          this.id_counter,
          input.email,
          input.officeNumber
        );
        this.id_counter++;
      })
      .then(() => this.askIfUserHasMoreEmployees());
  }

  getEngineerInput() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please input the Engineer's name.",
        },
        {
          type: "input",
          name: "email",
          message: "Please input the Engineer's email.",
        },
        {
          type: "input",
          name: "github",
          message: "Please input the Engineer's github profile.",
        },
      ])
      .then((input) => {
        this.engineers.push(
          new Engineer(input.name, this.id_counter, input.email, input.github)
        );
        this.id_counter += 1;
      });
  }

  getInternInput() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please input the Intern's name.",
        },
        {
          type: "input",
          name: "email",
          message: "Please input the Intern's email.",
        },
        {
          type: "input",
          name: "school",
          message: "Please input the Intern's school.",
        },
      ])
      .then((input) => {
        this.interns.push(
          new Intern(input.name, this.id_counter, input.email, input.school)
        );
        this.id_counter += 1;
      });
  }

  askIfUserHasMoreEmployees() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Do you have more Employees to provide?",
        },
      ])
      .then((val) => {
        if (val.choice) {
          this.askForNewEmployeeType();
        } else {
          this.quit();
        }
      });
  }

  askForNewEmployeeType() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What Employee role would you like to provide?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((val) => {
        if (val.choice === "Engineer") {
          this.getEngineerInput();
        } else {
          this.getInternInput();
        }
      })
      .then(() => this.askIfUserHasMoreEmployees());
  }

  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = TeamBuilder;
