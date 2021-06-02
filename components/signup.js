import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


const Register = () => {
  const paperStyle = { padding: "30px 20px", width: 400, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <br />
          <h2 style={headerStyle}> Register </h2>
        </Grid>
        <br />
        <Typography variant="caption">
          <h3>Please fill form to create an account !</h3>
        </Typography>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" />
          <TextField
            fullWidth
            label="LastName"
            placeholder="Enter your LastName"
          />
          <br />
          <br />
          <FormControl component="fieldset" sytle={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Email" placeholder="Enter your Email" />
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your LastName"
          />
          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />
          <br />
          <br />
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Sing up
              </Button>
            </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
