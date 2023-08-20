//Parent Shape Class

class shape {
  constructor() {
    this.color = "";
  }
  setColor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
}

//Generate SVG for Different Shapes with Specific Color
class Circle extends shape {
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" />
    <text x="0" y="15" fill="${this.textColor}">${this.text}!</text>
    </svg>
    `;
  }
}

class Triangle extends shape {
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    </svg>
    `;
  }
}

class Square extends shape {
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="150" height="150" fill="${this.color}" />
    </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };

//Add Text Color

//Update to also write SVG Boilerplate
