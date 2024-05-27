// Using object destructuring to import shapes classes from shapes.js
const { Circle, Triangle, Square } = require('./shapes');


describe('Circle', () => {
  test('should render a blue circle', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="25" cy="75" r="50" fill="blue"/>');
  });
});

describe('Triangle', () => {
  test('should render a blue triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="0,50 86.6,-25 -86.6,-25" fill="blue"/>');
  });
});

describe('Square', () => {
  test('should render a blue square', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.render()).toEqual('<rect x="-60" y="-40" width="100" height="100" fill="blue"/>');
  });
});