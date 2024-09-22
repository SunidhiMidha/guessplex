import logo from "./logo.svg";
import "./App.css";
import Board from "./Components/Board";
import { Component, useState } from "react";
import { boardDefault } from "./Constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: boardDefault,
    };
  }
  render() {
    return (
      <div className="App">
        GuessPlex - Wordle Clone App
        <div className="main-container">
          <Board board={this.state.board} />
        </div>
      </div>
    );
  }
}

export default App;
