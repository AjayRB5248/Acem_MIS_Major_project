import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/profile";
import Courses from './components/courses'
import Feedback from './components/feedback'
import Events from './components/events'
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./admin/dashboard";
import AddStudent from './admin/AddStudent'
import AddEvents from './admin/AddEvents'
import StudentBatch from './admin/StudentBatch'
import Feedbacks from './admin/Feedbacks'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/Timeline" component={App} />
      <Route exact path="/Logout" component={Login} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Courses" component={Courses} />
      <Route exact path="/Events" component={Events} />
      <Route exact path="/Feedback" component={Feedback} />
      <Route exact path="/admin/timeline" component={Dashboard} />
      <Route exact path="/admin/Add_Students" component={AddStudent} />
      <Route exact path="/admin/Add_Events" component={AddEvents} />
      <Route exact path="/admin/Student_Batch" component={StudentBatch} />
      <Route exact path="/admin/Feedbacks" component={Feedbacks} />

      <Route exact path="/" component={Login} />
      <Redirect from="*" to="/timeline" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
