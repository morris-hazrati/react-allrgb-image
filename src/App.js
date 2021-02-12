import React, { Component } from "react";
import Pixel from "./components/pixel";
import { createColors } from "./services/createColors";
import "./App.css";
///var colorSteps = 32;

function App() {
  let w = 100;
  const COLORS = createColors();
  console.log(COLORS[0]);
  console.log(COLORS[32767]);
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
