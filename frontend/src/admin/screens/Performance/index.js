import React from "react";
import Sidebar from "../../components/sidebar";
import "./index.css";
import { Grid } from "@material-ui/core";

const Index = () => {
  return (
    <Grid container direction="row" spacing={1}>
    <Grid item xs={2}>
      <Sidebar />
    </Grid>
      <div className="main_container">
        <h1>Coming Soon...</h1>
      </div>
      </Grid>
  );
};

export default Index;
