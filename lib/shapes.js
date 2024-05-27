// Creating a base Shape class constructor that takes in
// 'color'
class Shape {
  // Setting the default shape color to null
  constructor( color = null) {
    this.color = color;
  }

  // Creating a method to set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Defining the Circle class
class Circle extends Shape {
  constructor() {
    super(); // Circle will inherit parent color value
  }

  render(){
    // Color value will be determined by user input
    return `<circle cx="25" cy="75" r="50" fill="${this.color}"/>`
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<polygon points="0,50 86.6,-25 -86.6,-25" fill="${this.color}"/>`
  }
}

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<rect x="-60" y="-40" width="100" height="100" fill="${this.color}"/>`
  }
}

module.exports = {Circle, Square, Triangle}