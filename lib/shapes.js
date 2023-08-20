//Parent Shape Class

class shape {
  constructor() {
    // Initialize properties for color of the shape, text color, and text content.
    this.color = ""; // To store the color of the shape.
    this.textColor = ""; // To store the color of the text.
    this.text = ""; // To store the text content.
  }

  // Method to set color, text color, and text content of the shape.
  setColor(color, textColor, text) {
    // Update the 'color' property with the provided color.
    this.color = color;

    // Update the 'textColor' property with the provided text color.
    this.textColor = textColor;

    // Update the 'text' property with the provided text content.
    this.text = text;
  }
}

//Generate SVG for Different Shapes with Specific Color
class Circle extends shape {
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" />
    <text x="25" y="75" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
</svg>
    `;
  }
}

class Triangle extends shape {
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,18 244,182 56,182" fill="${this.color}" />
    <text x="150" y="150" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
</svg>
    `;
  }
}

class Square extends shape {
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="150" height="150" fill="${this.color}" />
    <text x="125" y="95" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
</svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
