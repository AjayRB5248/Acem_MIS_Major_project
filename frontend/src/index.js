import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/profile";
import Courses from './components/courses'
import Feedback from './components/feedback'
import Events from './components/events'
import "./index.css";
import App from "./App";
import {
  BrowserRouter ,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./admin/screens/dashboard";
import AddStudent from './admin/screens/AddStudent'
import AddEvents from './admin/screens/AddEvents'
import StudentBatch from './admin/screens/StudentBatch'
import Feedbacks from './admin/screens/Feedbacks'
import AdminLogin from './admin/screens/AdminLogin'
import AdminPrivate from './../src/admin/components/adminPrivate'
import StudentPrivate from './../src/components/StudentPrivate'
import Students from './admin/screens/Students'
import StudentInfo from './admin/screens/StudentInfo'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route element={<StudentPrivate />}>
      <Route path="/Timeline" element={<App/>} />
      <Route path="/Logout" element={<Login/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/Feedback" element={<Feedback/>} />
      </Route>
      <Route  path="/" element={<Login/>} />

      <Route element={<AdminPrivate />}>
      <Route path="/admin/timeline" element={<Dashboard/>} />
      <Route path="/admin/Add_Students" element={<AddStudent/>} />
      <Route path="/admin/Add_Events" element={<AddEvents/>} />
      <Route path="/admin/Student_Batch" element={<StudentBatch/>} />
      <Route path="/admin/Student_Batch/:batch/:section" element={<Students/>} />
      <Route path="/admin/Student_Batch/:batch/:section/:id" element={<StudentInfo/>} />
      <Route path="/admin/Feedbacks" element={<Feedbacks/>} />
      
      </Route>
      <Route path="/admin/login" element={<AdminLogin/>} />

     
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
