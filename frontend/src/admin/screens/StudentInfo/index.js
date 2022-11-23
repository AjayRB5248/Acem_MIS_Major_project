import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./index.css";
import { Grid } from "@material-ui/core";

const Index = () => {
  const { batch,faculty,section,id } = useParams();
  // console.log(id)
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const studentinfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/student/${batch}/${faculty}/${section}/${id}`
      );
      console.log(response?.data);
      setStudents(response?.data);
    };
    studentinfo();
  }, [id,batch,faculty,section]);
  return (
    <Grid container direction="row" spacing={1}>
    <Grid item xs={2}>
      <Sidebar />
    </Grid>
      <div className="main_container">
        {
          students.map((std) => (
            <>
          <div key={std?._id}>
            <h1>{std?.name}</h1>
            <img src={std?.profile} width='400px' alt='std?.name'/>
          </div>
          </>
        ))}
      </div>
      </Grid>
  );
};

export default Index;
