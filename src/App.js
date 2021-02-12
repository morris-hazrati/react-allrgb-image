import React, { Component } from "react";
import Pixel from "./components/pixel";
import { createColors } from "./services/createColors";
import "./App.css";

function App() {
  let w = 100;
  const COLORS = createColors();
  console.log(COLORS[0]);
  console.log(COLORS[32767]);

  const formatColor = (colorObject) => {
    let rFactor = colorObject.r;
    let gFactor = colorObject.g;
    let bFactor = colorObject.b;

    return `rgb(${rFactor}, ${gFactor}, ${bFactor})`;
  };

  return (
    <div
      style={{
        width: 400,
        hieght: 500,
        backgroundColor: "yellow",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Pixel color={formatColor({ r: 255, g: 0, b: 0 })} />
      <Pixel color={formatColor({ r: 255, g: 0, b: 0 })} />
      <Pixel color={formatColor({ r: 255, g: 0, b: 0 })} />
      <Pixel color={formatColor({ r: 255, g: 0, b: 0 })} />
      <Pixel color={formatColor({ r: 255, g: 0, b: 0 })} />
    </div>
  );
}

export default App;
