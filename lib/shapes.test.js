const { Triangle } = require("./shapes");

describe("Triangle", () => {
  it("should render SVG for a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,18 244,182 56,182" fill="blue" />
    <text x="150" y="150" fill="undefined" text-anchor="middle" alignment-baseline="middle">undefined</text>
</svg>`);
  });
});
