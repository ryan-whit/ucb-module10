const TeamBuilder = require("./lib/TeamBuilder");
const { writeHTML } = require("./src/js/generateTeamHTML");


async function runApp() {
    const teamBuilder = new TeamBuilder();
    await teamBuilder.gatherInput();

    writeHTML("./dist/index.html", teamBuilder);
    // console.log(teamBuilder);

};

runApp()
