import React, { Component } from "react";

export class Increment extends Component {
  render() {
    return (
      <button
        style={{ marginLeft: "2rem" }}
        className="btn btn-primary"
        onClick={this.props.increment}
      >
        Increment
      </button>
    );
  }
}

export default Increment;
