import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wallpaper from "./../../components/wallpaper";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./../../components/sidebar";
import "./feedback.css";

const Index = () => {
  const auth = localStorage.getItem("model");
  const [state, setState] = useState([]);

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "http://localhost:8000/api/feedback";

    try {
      const response = await axios.post(url, {
        TeacherName: state.TeacherName,
        faculty: state.faculty,
        feedbackMessage: state.feedbackMessage,
        student: JSON.parse(auth)._id,
      });
      if (response.status === 200) {
        toast.success("Submitted Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setState([]);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className="App">
      <ToastContainer />
      <Grid container direction="row" spacing={1}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Wallpaper />
          <Grid container direction="row">
            <Grid item xs={7}>
              <div className="feedback">
                <h5>Feedback Form</h5>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="feedback_form">
                    <label>Teacher Name</label>
                    <input
                      type="text"
                      name="TeacherName"
                      value={state.TeacherName}
                      onChange={handleState}
                      placeholder="Teacher Name"
                    />
                    <label>Faculty</label>
                    <input
                      type="text"
                      name="faculty"
                      value={state.faculty}
                      onChange={handleState}
                      placeholder="Faculty"
                    />
                    <label>Your Message</label>
                    <textarea
                      name="feedbackMessage"
                      value={state.feedbackMessage}
                      onChange={handleState}
                      placeholder="Type your Message...."
                    />

                    <button className="form_btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Grid>
            <Grid item xs={5}>
              <Calendar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
// }

export default Index;
