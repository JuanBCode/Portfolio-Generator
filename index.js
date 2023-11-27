// index.js

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your full name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?',
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Write a short bio:',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub URL:',
  },
];

function generateHTML(answers) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${answers.name}'s Portfolio</title>
      <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>${answers.name}</h1>
      <p>Location: ${answers.location}</p>
      <p>Bio: ${answers.bio}</p>
      <a href="${answers.linkedin}">LinkedIn</a>
      <a href="${answers.github}">GitHub</a>
    </body>
    </html>
  `;
}

function writeToFile(htmlContent) {
  fs.writeFileSync('index.html', htmlContent, 'utf8');
  console.log('Portfolio page created successfully!');
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const htmlContent = generateHTML(answers);
    writeToFile(htmlContent);
  });
}

init();
