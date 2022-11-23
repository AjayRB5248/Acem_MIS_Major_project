import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import styles from "./feedback.module.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@material-ui/core";
import moment from "moment";

const Index = () => {
  // const auth = localStorage.getItem("model");
  // const id = JSON.parse( localStorage.getItem("model"))._id

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);

  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const feedback = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/feedbacks/${page}`
      );
      const totalPage = Math.ceil(response.data.count / response.data.perPage);
      setTotalPage(totalPage);
      setFeedbacks(response?.data?.feedbacks);
    };
    feedback();
  }, [page]);
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <div className={styles.main_container}>
        {/* <h1>Feedbacks</h1> */}
        {feedbacks.map((feedback) => {
          return (
            <div className={styles.feedback_box} key={feedback.timestamp}>
              <div className={styles.student_info}>
                <div className={styles.image}>
                  <img
                    src={feedback.student.profile}
                    alt={feedback.student.profile}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{feedback.student.name}</h3>
                  <h4>Added: {moment(feedback.timestamp).startOf('day').fromNow()}</h4>
                  <div className={styles.clz_info}>
                    <p className={styles.batch}>
                      Batch:{feedback.student.batch}
                    </p>
                    <p className={styles.section}>
                      section:{feedback.student.section}
                    </p>
                  </div>
                </div>
              </div>
              <h1>{feedback.TeacherName}</h1>
              <h5>Faculty:{feedback.faculty}</h5>
              <p>{feedback.feedbackMessage}</p>
            </div>
          );
        })}
        <div className={styles.pagination}>
          {/* <Stack spacing={2}> */}
          {/* <Pagination count={10} shape="rounded" /> */}
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
            onChange={(e, value) => setPage(value)}
          />
          {/* </Stack> */}
        </div>
      </div>
    </Grid>
  );
};

export default Index;
