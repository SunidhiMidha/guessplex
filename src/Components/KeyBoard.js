import React, { Component } from "react";
import Key from "./Key";
const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

export default class KeyBoard extends Component {
  render() {
    return (
      <div className="keyboard">
        <div className="line1">
          {keys1.map((key) => {
            return <Key {...this.props} keyVal={key} />;
          })}
        </div>
        <div className="line2">
          {keys2.map((key) => {
            return <Key {...this.props} keyVal={key} />;
          })}
        </div>
        <div className="line3">
          <Key {...this.props} keyVal={"ENTER"} bigKey />
          {keys3.map((key) => {
            return <Key {...this.props} keyVal={key} />;
          })}
          <Key {...this.props} keyVal={"DELETE"} bigKey />
        </div>
      </div>
    );
  }
}
