import React, { useState } from "react";
import Papa from "papaparse";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import "./index.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "antd";
const Index = () => {
  const [file, setFile] = useState();
  const [response, setResponse] = useState([]);
  const [table,setTable]=useState(false)

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "College ID",
      dataIndex: "rollno",
      key: "rollno",
    },
    {
      title: "Attendance",
      dataIndex: "attendanceScore",
      key: "address",
    },
    {
      title: "Prediction",
      dataIndex: "prediction",
      key: "address",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "address",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    console.log(file);
    try {
      const response = await axios.post(
        "http://127.0.0.1:6060/predict",
        formData
      );
      console.log(response.data.prediction);
      setResponse(response?.data?.prediction);
      setTable(true)
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
      }
    } catch (error) {
      console.log(error);
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
    <>
      <Grid container direction="row" spacing={2}>
        <ToastContainer />

        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <div className="main_container">
          <form>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button
              className="submit-button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
      <div className={table ? "" : "hidden"}>
        <Table  dataSource={response} columns={columns} />
        </div>
        </div>
      </Grid>
    </>
  );
};

export default Index;
