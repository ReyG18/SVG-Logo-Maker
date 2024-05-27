const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

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
    choices: ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange']
  },
  {
    type: 'input',
    name: 'logoText',
    message: 'Type your logo text (up to 3 characters)'
  }
];