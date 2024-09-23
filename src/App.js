import "./App.css";
import Board from "./Components/Board";
import { Component } from "react";
import {
  boardDefault,
  colorBoard,
  NumberOfAttempts,
  NumberOfLetters,
} from "./Constants";
import wordBank from "./WordBank.txt";
import Celebration from "./Components/Celebration";
import GameOver from "./Components/GameOver";
import HowToPlay from "./Components/HowToPlay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: boardDefault,
      colors: colorBoard,
      currAttempt: 0,
      letterPos: 0,
      celebration: false,
      gameOver: false,
      score: 0,
    };

    this.WordsArray = [];
    this.wordsSet = [];
    this.selectedWord = "";
  }

  componentDidMount() {
    this.getWordsData();
    this.getScore();

    document.addEventListener("keydown", (e) => {
      let key = e?.key;

      if (!this.state.celebration && !this.state.gameOver) {
        if (key === "Enter") {
          this.onEnter();
        } else if (key === "Backspace") {
          this.onClear();
        } else if (/^[a-zA-Z]$/.test(key)) {
          let { board, currAttempt, letterPos } = this.state;
          if (letterPos < NumberOfLetters) {
            board[currAttempt][letterPos] = key.toUpperCase() || "";
            this.setState({
              board: board,
              letterPos: letterPos + 1,
            });
          }
        }
      }
    });
  }

  getWordsData() {
    fetch(wordBank)
      .then((res) => res.text())
      .then((result) => {
        this.WordsArray = result.split("\n");
        this.selectedWord = this.updateSelectedWord(this.WordsArray);
        this.wordsSet = new Set(this.WordsArray);
        console.log(">>selected", this.selectedWord, this.wordsSet);
      });
  }

  updateSelectedWord(wordArr) {
    return wordArr[Math.floor(Math.random() * wordArr.length)].toUpperCase();
  }

  getScore() {
    let score = window.localStorage.getItem("guessPlex_score");
    if (!!score && parseInt(score) > 0) {
      this.setState({
        score: parseInt(score),
      });
    }
  }

  updateScore() {
    window.localStorage.setItem("guessPlex_score", this.state.score + 1);
  }

  onEnter() {
    let { board, currAttempt, letterPos, colors } = this.state;

    if (letterPos === NumberOfLetters) {
      let inputArr = board[currAttempt];
      let entered = inputArr.reduce((prev, curr) => prev + curr, "");
      let correctWord = entered === this.selectedWord;
      let wordIncluded = this.wordsSet.has(entered.toLowerCase());

      if (correctWord) {
        this.updateScore();
        let colorsTemp = [...this.state.colors];
        colorsTemp[currAttempt] = colorsTemp[currAttempt].map((it) => "green");
        this.setState((prev) => ({
          colors: colorsTemp,
          score: prev.score + 1,
        }));

        setTimeout(() => {
          this.setState({
            celebration: true,
          });
        }, 500);
      } else if (!wordIncluded) {
        alert("Word not available");
      } else if (this.state.currAttempt + 1 === NumberOfAttempts) {
        let colorsTemp = [...this.state.colors];
        colorsTemp[currAttempt] = colorsTemp[currAttempt].map((it) => "red");

        this.setState({
          colors: colorsTemp,
        });
        this.setState({
          gameOver: true,
        });
      } else {
        let colorsTemp = colors;
        for (let i = 0; i < NumberOfLetters; i++) {
          if (inputArr[i] === this.selectedWord[i]) {
            colorsTemp[currAttempt][i] = "green";
          } else if (this.selectedWord.includes(inputArr[i])) {
            colorsTemp[currAttempt][i] = "yellow";
          } else {
            colorsTemp[currAttempt][i] = "grey";
          }
        }
        this.setState({
          currAttempt: this.state.currAttempt + 1,
          letterPos: 0,
          colors: colorsTemp,
        });
      }
    }
  }

  onClear() {
    let { board, currAttempt, letterPos } = this.state;

    if (letterPos > 0) {
      board[currAttempt][letterPos - 1] = "";
      this.setState({
        board: board,
        letterPos: letterPos - 1,
      });
    }
  }

  reset = () => {
    this.setState({
      board: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      colors: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      currAttempt: 0,
      letterPos: 0,

      celebration: false,
      gameOver: false,
    });

    this.selectedWord = this.updateSelectedWord(this.WordsArray);
    console.log(">>selectedWord", this.selectedWord);
  };

  render() {
    return (
      <div className="App">
        <div className="app-title">GuessPlex - Wordle Clone</div>
        <HowToPlay/>
        {!!this.state.celebration && <Celebration reset={this.reset} />}
        {!!this.state.gameOver && (
          <GameOver reset={this.reset} selectedWord={this.selectedWord} />
        )}
        <div className="score-text">Your Score: {this.state.score}</div>
        <div className="main-container">
          <Board board={this.state.board} colorBoard={this.state.colors} />
        </div>
      </div>
    );
  }
}

export default App;
