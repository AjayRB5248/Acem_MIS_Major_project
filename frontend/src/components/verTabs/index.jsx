import React from "react";
import { Box, Grid } from "@material-ui/core";
import "./style.css";
import Stepper from "../stepper";
// import React from 'react'

const index = (props) => {
 
  switch (props.value) {
    case 0:
      return (
        <Box className="vertab">
          <Grid container>
            <Grid item xs>
              <ul>
                <li>
                  <u>Gender</u>: Male
                </li>
                <li>
                  <u>Date of birth</u>: 07-09-2001
                </li>
                <li>
                  <u>Father</u> :Rakesh RanaBhat
                </li>
                <li>
                  <u>Mother </u>: Manju RanaBhat
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Nationality</u> : Nepali
                </li>
                <li>
                  <u>Religion</u> : Hindu
                </li>
                <li>
                  <u>Mother Tongue</u> : Nepali
                </li>
                <li>
                  <u>Marital Status</u> : Single
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
                <li>
                  <u>Height</u> : 5.11"
                </li>
                <li>
                  <u>Weight</u> : 70kg
                </li>
                <li>
                  <u>Blood Group</u> : O+
                </li>
                <li>
                  <u>Age </u>:21yrs
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      );
      case 1:
      return (
        <Box className="vertab">
          <Grid container>
           
            <Grid item xs>
              <ul>
              <li>
                  <u>Area </u>: Gaushala
                </li>
                <li>
                  <u>City </u>: Kathmandu
                </li>
                <li>
                  <u>Phone no </u> : +977 9813510603
                </li>
              </ul>
            </Grid>
            <Grid item xs>
              <ul>
              <li>
                  <u>Tel no</u> : +977 9813510603
                </li>
              <li>
                  <u>Email </u> : ajay.075bct005@acem.edu.np
                </li>
              <li>
                  <u>HomeTown </u> : Chitwan
                </li>
                
              </ul>
            </Grid>
          </Grid>
        </Box>
      );
    case 2:
      return (
        <Box className="vertab">
          <Stepper />
        </Box>
      );
    default:
      return <Box className="vertab">Error</Box>;
  }
}
export default index