import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wallpaper from "./../../components/wallpaper";
import { Grid } from "@material-ui/core";

import Sidebar from "./../../components/sidebar";
import "./feedback.css";

const Index = () => {
  return (
    <div className="App">
      <Grid container direction="row" spacing={1}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Wallpaper />
          <Grid container direction="row">
            <Grid item xs={7}>
              <div className="feedback">
                <h5>Feedbackform</h5>
                <hr />
                {/* <div className="feedback_form">
                  <input type="text" value="Teacher Name" />
                  <select>
                    <option value="grapefruit">BEx</option>
                    <option value="lime">BCE</option>
                    <option selected value="coconut">
                      BCT
                    </option>
                    <option value="mango">Mango</option>
                  </select>
                  <input type="textArea" value="Ajay" />
                </div> */}
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
