const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const generatePrompt = (role, promptField) => {
  let prompt = [
    {
      type: "input",
      name: "name",
      message: `Please input the ${role}'s name.`,
    },
    {
      type: "input",
      name: "email",
      message: `Please input the ${role}'s email.`,
    },
  ];

  // Append the provided prompt field associated with the role
  return prompt.concat(promptField);
};

class TeamBuilder {
  constructor() {
    this.manager = null;
    this.engineers = [];
    this.interns = [];
    this.id_counter = 1;
  }

  async gatherInput() {
    this.manager = await this.getManagerInput();
    this.id_counter++;

    let userHasMoreEmployees = true;
    while (userHasMoreEmployees) {
      const userType = await this.askForNewEmployeeType();
      if (userType === "Engineer") {
        const engineer = await this.getEngineerInput();
        this.engineers.push(engineer);
      } else {
        const intern = await this.getInternInput();
        this.interns.push(intern);
      }
      this.id_counter++;

      userHasMoreEmployees = await this.askIfUserHasMoreEmployees();
    }
    this.quit();
  }

  async getManagerInput() {
    return await inquirer
      .prompt(
        generatePrompt("Manager", {
          type: "input",
          name: "officeNumber",
          message: "Please input the Manager's office number.",
        })
      )
      .then((input) => {
        const manager = new Manager(
          input.name,
          this.id_counter,
          input.email,
          input.officeNumber
        );
        return manager;
      });
  }

  async getEngineerInput() {
    return await inquirer
      .prompt(
        generatePrompt("Engineer", {
          type: "input",
          name: "github",
          message: "Please input the Engineer's github profile.",
        })
      )
      .then((input) => {
        const engineer = new Engineer(
          input.name,
          this.id_counter,
          input.email,
          input.github
        );
        return engineer;
      });
  }

  async getInternInput() {
    return await inquirer
      .prompt(
        generatePrompt("Intern", {
          type: "input",
          name: "school",
          message: "Please input the Intern's school.",
        })
      )
      .then((input) => {
        const intern = new Intern(
          input.name,
          this.id_counter,
          input.email,
          input.school
        );
        return intern;
      });
  }

  async askIfUserHasMoreEmployees() {
    return await inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Do you have more Employees to provide?",
        },
      ])
      .then((val) => val.choice);
  }

  async askForNewEmployeeType() {
    return await inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What Employee role would you like to provide?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((val) => val.choice);
  }

  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = TeamBuilder;
