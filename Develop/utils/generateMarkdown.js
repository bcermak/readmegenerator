// function to generate markdown for README
function generateMarkdown(data) {
  return "Title: " + ` ${data.Title}` +
   "Description: " + ` ${data.Description}` +
   "Table: " + ` ${data.Table}` +
   "Installation: " + ` ${data.Installation}` +
   "Usage: " + ` ${data.Usage}` +
   "License: " + ` ${data.License}` +
   "Contributions: " + ` ${data.Contributing}` +
   "Tests: " + ` ${data.Tests}` +
   "Questions: " + ` ${data.Questions}`
}

module.exports = generateMarkdown;
