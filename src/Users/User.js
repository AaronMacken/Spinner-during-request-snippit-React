import React from "react";
import EditUser from "./EditUser";
import PropTypes from "prop-types";

export default function User(props) {
  return (
    <div className="todo">
      <p style={{ padding: "2rem", width: "75%", textAlign: "center" }}>
        {props.user}
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EditUser
          userData={{
            email: props.user,
            id: props.id,
          }}
          update={props.update}
        />
        <button
          className="btn btn-danger"
          onClick={() => props.delete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// user={user.email}
// update={this.props.update}
// delete={this.props.delete}
// id={user.id}
User.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};
