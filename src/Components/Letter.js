import React, { Component } from "react";

export default class Letter extends Component {
  render() {
    console.log(">>Letter", this.props);

    const { board, attemptVal, letterPos } = this.props;

    return <div className="letter">{board[attemptVal][letterPos]}</div>;
  }
}
