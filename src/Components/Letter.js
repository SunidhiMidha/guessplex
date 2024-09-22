import React, { Component } from "react";

export default class Letter extends Component {
  render() {
    const { board, attemptVal, letterPos, colorBoard } = this.props;

    return <div className="letter" id={colorBoard?.[attemptVal]?.[letterPos]}>{board[attemptVal][letterPos]}</div>;
  }
}
