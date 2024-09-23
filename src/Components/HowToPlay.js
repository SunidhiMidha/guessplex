import React, { Component } from "react";
import Modal from "./Modal";

export default class HowToPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  handleClick = (e) => {
    e.stopPropagation();
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };
  render() {
    return (
      <div className="help-container">
        <img
          src={require("../help.png")}
          className="help-icon"
          onClick={this.handleClick}
        />

        <Modal isOpen={this.state.showModal} onClose={this.handleClick}>
          <div className="help-title">How To Play?</div>

          <div className="help-content">
            You have to guess the hidden word in 6 tries and the color of the
            letters changes to show how close you are. To start the game, just
            enter any word, for example:
            
            <div className="row" style={{ alignSelf: "center" }}>
              <div className="letter" id={"grey"}>T</div>
              <div className="letter" id={"yellow"}>A</div>
              <div className="letter" id={"grey"}>B</div>
              <div className="letter" id={"yellow"}>L</div>
              <div className="letter" id={"green"}>E</div>
            </div>

            <div
              style={{
                textAlign: "left",
                marginLeft: 20,
                alignSelf: "flex-start",
              }}
            >
              T, B aren't in the target word at all.
              <br />
              A , L is in the word but in the wrong spot.
              <br />E is in the word and in the correct spot.
            </div>
            
            <div style={{marginTop:14}}>Another try to find matching letters in the target word.</div>
            
            <div className="row" style={{ alignSelf: "center" }}>
                <div className="letter" id={"green"}>F</div>
                <div className="letter" id={"green"}>L</div>
                <div className="letter" id={"green"}>A</div>
                <div className="letter" id={"grey"}>S</div>
                <div className="letter" id={"grey"}>H</div>
            </div>
            
            So close!

            <div className="row" style={{ alignSelf: "center", marginTop:14 }}>
                <div className="letter" id={"green"}>F</div>
                <div className="letter" id={"green"}>L</div>
                <div className="letter" id={"green"}>A</div>
                <div className="letter" id={"green"}>M</div>
                <div className="letter" id={"green"}>E</div>
            </div>
          </div>

          <button onClick={this.handleClick} className="help-button">
            Got it!! 🥳
          </button>
        </Modal>
      </div>
    );
  }
}
