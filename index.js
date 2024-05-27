const fs = require('fs');
const inquirer = require('inquirer');

async function logoBuilder() {
  const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'list',
      name: 'color',
      message: 'Choose a color',
      choices: ['Black','White','Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange']
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Choose a color for your text',
      choices: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange']
    },
    {
      type: 'input',
      name: 'text',
      message: 'Type your logo text (up to 3 characters)'
    }
  ];

  // Error handling
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    const svgContent = await generateLogo(answers.shape, answers.color, answers.textColor, answers.text);
    console.log('Generated logo.svg successfully!');
    await writeToSvg(svgContent);
  } catch(err) {
    console.log(err);
  }
};

// Defining a function to generate the logo
async function generateLogo(shape, color, textColor, text) {
  let svgContent;
  switch(shape) {
    case 'Circle':
      svgContent = `
        <svg width="300" height="200">
          <circle cx="150" cy="100" r="50" fill="${color}"/>
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
        </svg>
      `;
      break;
    
    case 'Triangle':
      svgContent = `
        <svg width="300" height="200">
          <polygon points="150,50 250,150 50,150" fill="${color}"/>
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
        </svg>
      `;
      break;
    
    case 'Square':
      svgContent = `
        <svg width="300" height="200">
          <rect x="100" y="50" width="100" height="100" fill="${color}"/>
          <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>
        </svg>
      `;
      break;
  }

  return svgContent;
}

// Defining an async function to write the svg content to the logo.svg file
async function writeToSvg(svgContent) {
  try {
    const fileName = 'logo.svg';

    await fs.writeFile(fileName, svgContent);
    console.log('SVG file created successfully!');
  } catch(err) {
    throw new Error('Writing SVG File failed.', err);
  }
}

logoBuilder();