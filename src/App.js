import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";

function App() {
  let w = 100;
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            display: "inline-block",
            margin: 0,
            height: w,
            width: w,
            backgroundColor: "blue",
          }}
          className="App"
        ></div>
        <div
          style={{
            display: "inline-block",
            margin: 0,
            height: w,
            width: w,
            backgroundColor: "red",
          }}
          className="App"
        ></div>
        <div
          style={{
            padding: 0,
            margin: 0,
            height: w,
            width: w,
            backgroundColor: "red",
          }}
          className="App"
        ></div>
      </div>
    </React.Fragment>
  );
}

export default App;
