import Lottie from "lottie-react";
import React, { Component } from "react";
import celebration_lottie from "../celebration_lottie.json";

export default class Celebration extends Component {
  render() {
    return (
      <div className="celebration">
        <Lottie
          loop={true}
          animationData={celebration_lottie}
          className="lottie"
        />
        <div style={{marginBottom:-20}}>CONGRATULATIONS!!</div>
        <button className="celebration-button" onClick={this.props.reset}>
          RESET
        </button>
      </div>
    );
  }
}
