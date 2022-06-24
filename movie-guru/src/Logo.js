import React, { Component } from "react";
import moviegurulogo from "./moviegurulogo.png";

class Logo extends Component {
  render() {
    const size = {
      maxWidth: 200,
    };
    return <img style={size} alt="Logo" src={moviegurulogo} />;
  }
}

export default Logo;
