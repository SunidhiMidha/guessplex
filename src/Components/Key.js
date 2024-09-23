import React, { Component } from "react";

export default class Key extends Component {
  render() {
    const { doneLetters, keyVal, bigKey, selectLetter } = this.props;
    const grey_ui = doneLetters?.[keyVal] === "grey";
   
    return (
      <div
        className="key"
        id={bigKey ? "big" : grey_ui ? "disabled" : ""}
        onClick={() => selectLetter(keyVal)}
      >
        {keyVal}
      </div>
    );
  }
}
