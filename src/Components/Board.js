import React, { Component } from "react";
import Letter from "./Letter";
import { NumberOfAttempts, NumberOfLetters } from "../Constants";

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        {Array.from({ length: NumberOfAttempts }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: NumberOfLetters }).map((_, letterIndex) => (
              <Letter
                {...this.props}
                key={letterIndex}
                letterPos={letterIndex}
                attemptVal={rowIndex}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
