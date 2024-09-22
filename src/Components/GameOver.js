import Lottie from "lottie-react";
import React, { Component } from "react";
import game_over from "../game_over.json";

export default class GameOver extends Component {
  render() {
    return (
      <div className="celebration">
        <Lottie
          loop={true}
          animationData={game_over}
          className="game-over-lottie"
        />
        <div className="small-text">
          Correct Word is: {this.props.selectedWord}
        </div>
        <button className="celebration-button" onClick={this.props.reset}>
          RESET
        </button>
      </div>
    );
  }
}
