import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BasicInfo({ state, setState }) {
  const { id } = useParams();
  const [student, setStudent] = React.useState([]);
  React.useEffect(() => {
    const studentinfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/students/${id}`
      );
      console.log(response?.data);
      setStudent(response?.data);
    };
    studentinfo();
  }, [id]);

  const handleState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(state);
  };
  const handleImage = (event) => {
    setState({
      ...state,
      profile: event.target.files[0],
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="name"
            value={student?.name}
            onChange={handleState}
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CollegeId "
            name="cid"
            value={student?.cid}
            onChange={handleState}
            label="College ID (ACE000BCX000)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="email"
            value={student?.email}
            onChange={handleState}
            label="Email"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="location"
            value={student?.location}
            onChange={handleState}
            label="Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            id="phone"
            name="profile"
            type="file"
            // value={student?.profile}
            onChange={handleImage}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="HomeTown"
            name="hometown"
            value={student?.hometown}
            onChange={handleState}
            label="HomeTown"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FatherName"
            name="fathername"
            value={student?.fathername}
            onChange={handleState}
            label="Father's Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="MotherName"
            name="mothername"
            value={student?.mothername}
            onChange={handleState}
            label="Mother's Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Dob"
            name="Dob"
            value={student?.Dob}
            onChange={handleState}
            label="Date of Birth (DD/MM/YYYY)"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="BloodGroup"
            name="bloodgroup"
            value={student?.bloodgroup}
            onChange={handleState}
            label="BloodGroup"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
