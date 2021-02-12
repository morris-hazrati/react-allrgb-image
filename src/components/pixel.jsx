import React, { Component } from "react";

class Pixel extends Component {
  render() {
    //const { color } = this.props;
    let w = 1;
    return (
      //a div with the sizes of 1*1 pixel
      <div
        style={{
          display: "inline-block",
          margin: 0,
          height: w,
          width: w,

          //use template literals to pass the color dynamically
          backgroundColor: `${this.props.color}`,
        }}
        className="App"
      ></div>
    );
  }
}

export default Pixel;
