import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class UserShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
    };
  }

  getData = async () => {
    try {
      let res = await axios.get(
        `https://reqres.in/api/users/${this.props.match.params.id}`
      );
      this.setState({ userData: res.data.data });
    } catch (error) {
      console.log(error);
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" style={styles}>
          <h1 className="mb-5" style={{ textAlign: "center" }}>
            User Show Page
          </h1>
          <h3>First Name: {this.state.userData.first_name}</h3>
          <h3>Last Name: {this.state.userData.last_name}</h3>
          <h3>Email: {this.state.userData.email}</h3>
          <p className="mb-5">
            React Router Match.Params prop: {this.props.match.params.id}
          </p>

          <Link to="/">Go Home</Link>
        </div>
      </React.Fragment>
    );
  }
}

let styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
};

export default UserShowPage;
