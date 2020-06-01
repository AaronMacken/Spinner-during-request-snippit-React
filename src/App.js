import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./Users/Users";
import Spinner from "./Spinner";
import AddUser from "./Users/AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
    };
    // this.createNewUser = this.createNewUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      this.setState({ isLoading: true });
      let res = await axios.get("https://reqres.in/api/users");
      let { data } = res;
      this.setState({ users: data.data, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  };

  createNewUser = async (data) => {
    try {
      this.setState({ isLoading: true });
      let res = await axios.post("https://reqres.in/api/users", data);

      console.log(res.data);
      this.setState({
        isLoading: false,
        users: [...this.state.users, res.data],
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (id, updateData) => {
    try {
      this.setState({ isLoading: true });
      let res = await axios.put(`https://reqres.in/api/users${id}`, {
        updateData,
      });
      let updateInfo = res.data.updateData;

      let updatedUsers = this.state.users.map((user) => {
        if (user.id === id) {
          return {
            email: updateInfo,
            id: id,
          };
        }
        return user;
      });

      this.setState({ isLoading: false, users: updatedUsers });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async (id) => {
    try {
      this.setState({ isLoading: true });
      await axios.delete(`https://reqres.in/api/users${id}`);
      this.setState({ users: this.state.users.filter((e) => e.id !== id) });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let content = this.state.isLoading ? (
      <Spinner />
    ) : (
      <Users
        users={this.state.users}
        delete={this.deleteUser}
        update={this.updateUser}
      />
    );
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Users App: State And Props</h1>
        <AddUser createNewUser={this.createNewUser} />
        <div className="content-div">{content}</div>
      </div>
    );
  }
}

export default App;
