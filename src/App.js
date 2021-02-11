import React, { Component } from "react";
import Pixel from "./components/pixel";
import "./App.css";
var colorSteps = 32;

const createColors = () => {
  let colors = [];
  for (let r = 8; r <= 256; r += 8) {
    for (let g = 8; g <= 256; g += 8) {
      for (let b = 8; b <= 256; b += 8) {
        colors.push(r, g, b);
      }
    }
  }

  console.log(colors);
  return colors;
};

function App() {
  let w = 100;
  createColors();
  return (
    <div
      style={{
        width: 1000,
        hieght: 500,
        backgroundColor: "yellow",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Pixel color={"red"} />
      <Pixel color={"blue"} />
      <Pixel color={"green"} />
      <Pixel color={"pink"} />
      <Pixel color={"brown"} />
      <Pixel color={"brown"} />
      <Pixel color={"red"} />
      <Pixel color={"blue"} />
      <Pixel color={"green"} />
      <Pixel color={"pink"} />
      <Pixel color={"brown"} />
      <Pixel color={"red"} />
      <Pixel color={"blue"} />
      <Pixel color={"green"} />
      <Pixel color={"pink"} />
      <Pixel color={"brown"} />
      <Pixel color={"red"} />
      <Pixel color={"blue"} />
      <Pixel color={"green"} />
      <Pixel color={"pink"} />
      <Pixel color={"brown"} />
    </div>
  );
}

export default App;
