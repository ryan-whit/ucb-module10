// JavaScript for generating the HTML content.
// Constructed around the TeamBuilder class.

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
		<link rel="stylesheet" href="/css/style.css" />
	</head>
	`
};

const generateHtmlBody = (teamBuilder) => {

}

const generateHTML = (teamBuilder) => {
  let html = '<!DOCTYPE html>\n<html lang="en"></html>';
  html += generateHtmlHead();
  thml += generateHtmlBody(teamBuilder);
  html += `</body>\n</html>\n;`;
  return html;
};
