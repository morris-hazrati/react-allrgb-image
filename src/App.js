import React, { Component } from "react";
import Pixel from "./components/pixel";
import { createColors } from "./services/createColors";
import "./App.css";

class App extends Component {
  state = {};

  //the colors are created by constructor hook
  constructor() {
    super();
    this.state = { colors: createColors() };
  }

  render() {
    //log out to the console the first and last unique colors
    console.log(this.state.colors[0]);
    console.log(this.state.colors[32767]);

    //helper function to change the format of the color to be pass as props
    const formatColor = (colorObject) => {
      let rFactor = colorObject.r;
      let gFactor = colorObject.g;
      let bFactor = colorObject.b;

      return `rgb(${rFactor}, ${gFactor}, ${bFactor})`;
    };

    return (
      //a div with the dimension of 256*128 pixels created to contain all the pixle components
      <div
        style={{
          width: 256,
          hieght: 128,
          backgroundColor: "yellow",
          //to have pixel components to cover like bricks, flex style used
          display: "flex",
          //to be wrap to the next line, flexwrap used
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
