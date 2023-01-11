import React, { useState } from "react";
import Papa from "papaparse";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import "./index.css";
import { Grid } from "@material-ui/core";

function DataTable({ data }) {
  return (
    <table className="table">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Index = () => {
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/upload", { data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className="main_container">
      <form>
                <input
                    className="file-input"
                    type="file"
                    accept=".csv"
                    onChange={handleFileSelect}
                />
                <button className="submit-button" type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        <DataTable data={data} />
      </div>
    </Grid>
  );
};

export default Index;
