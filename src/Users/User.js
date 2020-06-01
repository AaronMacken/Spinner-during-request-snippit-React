import React from "react";
import EditUser from "./EditUser";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

export default function User(props) {
  return (
    <div className="todo">
      <Link to={`/users/${props.id}`}>
        <p style={{ padding: "2rem", width: "75%", textAlign: "center" }}>
          {props.user}
        </p>
      </Link>

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

User.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
};
