import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { makeStyles } from '@material-ui/core/styles';

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";



const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Register = () => {
  const paperStyle = { padding: "30px 20px", width: 400, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const classes = useStyles();

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <br />
          <h2 style={headerStyle}> สมัครบัญชีร้านค้า </h2>
        </Grid>
        <br />
        <Typography variant="caption">
          <h3>เปิดร้านค้ากันเราเลยตอนนี้ กรุณากรอกข้อมูลให้ครบ !!!</h3>
        </Typography>
        <form>
          <TextField fullWidth label="ชื่อ" placeholder="Enter your name" />
          <TextField
            fullWidth
            label="นามสกุล"
            placeholder="Enter your LastName"
          />
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
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
          <Grid container spacing={3}>
            <Grid item>
              <Button href="/Signin" variant="contained" color="black">
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Sing up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
