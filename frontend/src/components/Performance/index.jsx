import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Wallpaper from "./../../components/wallpaper";
import { Grid } from "@material-ui/core";
import Sidebar from "./../../components/sidebar";
import "./index.css";
import { Chart } from "react-google-charts";

const Index = () => {

  const data = [
    ["Task", "Hours per Day"],
    ["Previous Score", 11],
    ["Attendence Score", 2],
    ["Assignment Score", 2],
    ["Assessment Score", 7],
  ];

  const options = {
    title: "My Semester Perfromance",
    is3D: true,
  };

  // const chartRef = useRef();

  // useEffect(() => {
  //   const myChartRef = chartRef.current.getContext("2d");

  //   new Chart(myChartRef, {
  //     type: "pie",
  //     data: {
  //       labels: ["Previous Score", "Attendence Score", " Assignment Score", "Assessment Score"],
  //       datasets: [
  //         {
  //           label: "My Chart",
  //           data: [10, 20, 30, 40],
  //           backgroundColor: ["#f44336", "#2196f3", "#4caf50", "#ffc107"],
  //         },
  //       ],
  //     },
  //   });
  // }, []);


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
              <div className="performance_pieChart">
                {/* <canvas ref={chartRef} style={{ width: "100%" }} /> */}
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                  height={"400px"}
                />

              </div>
              <div className="remarks">
                <h1>Remarks:Excellent</h1>
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


