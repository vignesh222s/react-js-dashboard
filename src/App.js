import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";
import AuthedRoutes from "./scene";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <AuthedRoutes />
      </Switch>
    );

    return <div className="App">{routes}</div>;
  }
}

export default App;
