const fs = require('fs');
const inquirer = require('inquirer');

// This function handles inquirer, receiving and storing the input data, 
// and writing that data to the .svg file after the logo is generated.
async function logoBuilder() {

  // User will be prompted to answer these questions.
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
      message: 'Choose a color for your shape',
      choices: ['Black','White','Red', 'Blue', 'Green']
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Choose a color for your text',
      choices: ['Black', 'White', 'Red', 'Blue', 'Green']
    },
    {
      type: 'input',
      name: 'text',
      message: 'Type your logo text (up to 3 characters)'
    }
  ];

  
  try {
    // Waiting until after questions are answered to store them into the 'answers' variable.
    const answers = await inquirer.prompt(questions);
    console.log(answers);

    // After user input is received, the data will be stored in the variable 'svgContent'
    const svgContent = await generateLogo(answers.shape, answers.color, answers.textColor, answers.text);
    console.log('Generated logo.svg successfully!');

    // After generateLogo (see line 52) runs successfully, the logo will be written to a .svg file
    await writeToSvg('logo.svg', svgContent);
  } catch(err) {
    console.log(err);
  }
};

// This function takes in the user input data as params and uses it to generate the logo
async function generateLogo(shape, color, textColor, text) {
  let svgContent;

  // Using template literals to dynamically render the user's choices for shape, color, textColor, and text
  switch(shape) {
    case 'Circle':
      svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${color}"/>
        <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
      </svg>
    
      `;
      break;
    
    case 'Triangle':
      svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 50,180 250,180" fill="${color}"/>
        <text x="150" y="140" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
      </svg>
    
    
      `;
      break;
    
    case 'Square':
      svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="${color}"/>
        <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
      </svg>
      `;
      break;
  }

  return svgContent;
}

// This function handles writeFile, specifying the params it uses to create the .svg file
function writeToSvg(fileName, svgContent) {
  fs.writeFile(fileName, svgContent, (err) => {

    // Any errors will be logged, otherwise a success message will print to the console.
    err ? console.error(err) : console.log('SVG file created successfully!')
  });
};

// Call the logoBuilder function to execute once 'node index.js' is entered in the terminal.
logoBuilder();