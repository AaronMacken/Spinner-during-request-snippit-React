import React, { Component } from "react";
import Todo from "./Todo";

export class Todos extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.users.map((todo) => (
            <div className="col-12 col-md-6 mt-5 todos-col" key={todo.id}>
              <Todo
                todo={todo.email}
                update={this.props.update}
                delete={this.props.delete}
                id={todo.id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
