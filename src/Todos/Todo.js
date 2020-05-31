import React from "react";
import EditTodo from "./EditTodo";

export default function Todo(props) {
  return (
    <div className="col-12 col-md-6 todo">
      <p style={{ flexGrow: 4 }}>{props.todo}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EditTodo
          userData={{
            email: props.todo,
            id: props.id,
          }}
          update={props.update}
        />
        <button
          className="btn btn-danger"
          onClick={() => props.delete(props.id)}
          style={{ flexGrow: 1 }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
