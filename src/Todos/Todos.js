import React, { Component } from "react";
import Todo from "./Todo";

export class Todos extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.todos.map((todo) => (
            <div className="col-12 col-md-6 mt-5">
              <Todo todo={todo.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
