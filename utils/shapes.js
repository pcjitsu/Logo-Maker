class shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends shape {
  render() {
    return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Triangle extends shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Square extends shape {
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" stroke-width="5"/>`;
  }
}

module.exports = { Circle, Triangle, Square };

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
