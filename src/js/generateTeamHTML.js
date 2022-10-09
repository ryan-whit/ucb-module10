// JavaScript for generating the HTML content.
// Constructed around the TeamBuilder class.

const fs = require("fs");

const generateHtmlHead = () => {
  return `
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Team Builder</title>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css"
		/>
		<link rel="stylesheet" href="./css/style.css" />
	</head>
	`;
};

const generateHtmlNavbar = () => {
  return `
		<section class="panel is-primary is-centered">
			<h1 class="panel-heading">My Team</h1>
		</section>
	`;
};

const generateManagerCard = (manager) => {
	return `
      <div class="column is-one-quarter">
        <div class="card card-background">
          <div class="box header-color">
            <div class="card-content">
              <p class="title header-color">${manager.name}</p>
              <p class="subtitle header-color">Manager</p>
            </div>
          </div>
          <div class="box">
            <div class="card-content">
              <div class="content">
                <div class="box">
                  <h2 class="subtitle is-4">ID: ${manager.id}</h2>
                </div>
                <h2 class="box subtitle is-4">
									Email: <a class="subtitle is-4" href="mailto:${manager.email}">${manager.email}</a>
								</h2>
                <div class="box">
                  <h2 class="subtitle is-4">Office Number: ${manager.officeNumber}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	`;
}

const generateEngineerCard = (engineer) => {
		return `
      <div class="column is-one-quarter">
        <div class="card card-background">
          
				  <div class="box header-color">
            <div class="card-content">
              <p class="title header-color">${engineer.name}</p>
              <p class="subtitle header-color">Engineer</p>
            </div>
          </div>
          
					<div class="box">
            <div class="card-content">
              <div class="content">
                
							  <div class="box">
                  <h2 class="subtitle is-4">ID: ${engineer.id}</h2>
                </div>
                
								<h2 class="box subtitle is-4">
									Email: <a class="subtitle is-4" href="mailto:${engineer.email}">${engineer.email}</a>
								</h2>
                
								<h2 class="box subtitle is-4">
									GitHub: <a class="subtitle is-4" href="${engineer.github}">${engineer.github}</a>
								</h2>
                
							</div>
            </div>
          
					</div>
        </div>
      </div>\n\n
		`;	
};

const generateInternCard = (intern) => {
		return `
      <div class="column is-one-quarter">
        <div class="card card-background">
          
				  <div class="box header-color">
            <div class="card-content">
              <p class="title header-color">${intern.name}</p>
              <p class="subtitle header-color">Intern</p>
            </div>
          </div>
          
					<div class="box">
            <div class="card-content">
              <div class="content">
                
							  <div class="box">
                  <h2 class="subtitle is-4">ID: ${intern.id}</h2>
                </div>
                
								<h2 class="box subtitle is-4">
									Email: <a class="subtitle is-4" href="mailto:${intern.email}">${intern.email}</a>
								</h2>
                
								<div class="box">
                  <h2 class="subtitle is-4">School: ${intern.school}</h2>
                </div>
         
							</div>
            </div>
          
					</div>
        </div>
      </div>\n\n
		`;	
};

const generateHtmlBody = (teamBuilder) => {
	let html = "  <body>\n\n";

	// Generate the header
	html += generateHtmlNavbar();
	
	// Generate the Employee cards. Use one card per column.
	html += `	  <section class="columns is-multiline">\n\n`;
	// Only one Manager card
	html += generateManagerCard(teamBuilder.manager);

	// Generate Cards for each Engineer
	teamBuilder.engineers.forEach(engineer => {
		html += generateEngineerCard(engineer)});

	// Generate Cards for each Intern
	teamBuilder.interns.forEach(intern => {
		html += generateInternCard(intern)});

	// Close the body Element
	html += `
		</section>
	</body>
	`

	return html;
};

const generateHTML = (teamBuilder) => {
  let html = '<!DOCTYPE html>\n<html lang="en">';
  html += generateHtmlHead();
  html += generateHtmlBody(teamBuilder);
  html += `</html>\n`;
  return html;
};

const writeHTML = (filepath, teamBuilder) => {
	const htmlContent = generateHTML(teamBuilder);
	fs.writeFile(filepath, htmlContent, function (err) {
		if (err) throw err;
		console.log(`\nHTML file written to ${filepath}.`);
	});
}

module.exports = {writeHTML};
