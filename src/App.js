import React from "react";
import "./App.css";
import axios from "axios";
import Todos from "./Todos/Todos";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = async () => {
    try {
      this.setState({ isLoading: true });
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      let { data } = res;
      this.setState({ todos: data, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  };

  // Get Todos from API without async await
  // getTodos = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => this.setState({ todos: res.data }))
  //     .catch((err) => {
  //       console.error(err);
  //       return null;
  //     });
  // };

  render() {
    let content = this.state.isLoading ? (
      <Spinner />
    ) : (
      <Todos todos={this.state.todos} />
    );
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Todo App: State And Props</h1>
        <div className="content-div">{content}</div>
      </div>
    );
  }
}

export default App;
