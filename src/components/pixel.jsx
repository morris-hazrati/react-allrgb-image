import React, { Component } from "react";

class Pixel extends Component {
  render() {
    //const { color } = this.props;
    let w = 1;
    return (
      <div
        style={{
          display: "inline-block",
          margin: 0,
          height: w,
          width: w,
          backgroundColor: `${this.props.color}`,
        }}
        className="App"
      ></div>
    );
  }
}

export default Pixel;
