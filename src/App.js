import React, { Component } from "react";
import Pixel from "./components/pixel";
import { createColors } from "./services/createColors";
import "./App.css";

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = { colors: createColors() };
  }

  render() {
    let w = 100;

    console.log(this.state.colors[0]);
    console.log(this.state.colors[32767]);

    const formatColor = (colorObject) => {
      let rFactor = colorObject.r;
      let gFactor = colorObject.g;
      let bFactor = colorObject.b;

      return `rgb(${rFactor}, ${gFactor}, ${bFactor})`;
    };

    return (
      <div
        style={{
          width: 256,
          hieght: 128,
          backgroundColor: "yellow",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {this.state.colors.map((color) => (
          <Pixel
            key={this.state.colors.indexOf(color)}
            color={formatColor(color)}
          />
        ))}
      </div>
    );
  }
}

export default App;
