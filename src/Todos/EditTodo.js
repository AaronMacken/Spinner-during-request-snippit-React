import React, { Component, Fragment } from "react";

export class EditTodo extends Component {
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
          class="btn btn-primary"
          data-toggle="modal"
          data-target={`#modal${this.props.userData.id}`}
        >
          Edit
        </button>

        {/* CONTAINING DIV */}
        <div
          class="modal fade"
          id={`modal${this.props.userData.id}`}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={this.resetPlaceholder}
        >
          <div class="modal-dialog" role="document" style={{ zIndex: 999 }}>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Todo
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.resetPlaceholder}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <input
                  type="text"
                  name="editInput"
                  placeholder={this.props.userData.email}
                  value={this.state.editInput}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.resetPlaceholder}
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
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

export default EditTodo;
