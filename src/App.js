import React from "react";
import "./App.css";
import UsersPage from "./Pages/UsersPage";
import UserShowPage from "./Pages/UserShowPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={UsersPage} />
            <Route exact path="/users/:id" component={UserShowPage} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
