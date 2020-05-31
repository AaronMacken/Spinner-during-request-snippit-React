import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNew = (e) => {
    e.preventDefault();
    this.props.createNewTodo({
      email: this.state.input,
      name: "Frank",
      id: uuidv4(),
    });
    this.setState({ input: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.submitNew}
        style={{ margin: "2rem", display: "flex" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add Item"
          aria-label="addItem"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddTodo;
