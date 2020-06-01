import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  resetPlaceholder = () => {
    this.setState({ editInput: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.update(this.props.userData.id, this.state.editInput);
    this.resetPlaceholder();
  };

  render() {
    return (
      <Fragment>
        {/* OPEN MODAL BUTTON */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#modal${this.props.userData.id}`}
          style={{ marginBottom: "1rem" }}
        >
          Edit
        </button>

        {/* CONTAINING DIV */}
        <div
          className="modal fade"
          id={`modal${this.props.userData.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={this.resetPlaceholder}
        >
          <div className="modal-dialog" role="document" style={{ zIndex: 999 }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Email
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.resetPlaceholder}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  name="editInput"
                  placeholder={this.props.userData.email}
                  value={this.state.editInput}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.resetPlaceholder}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

EditUser.propTypes = {
  userData: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default EditUser;
