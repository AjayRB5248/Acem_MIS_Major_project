import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/profile";
import Courses from './components/courses'
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/Timeline" component={App} />
      <Route exact path="/Logout" component={Login} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Courses" component={Courses} />
      <Route exact path="/" component={Login} />
      <Redirect from="*" to="/timeline" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
