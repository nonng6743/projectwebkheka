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

import axios from 'axios'
import {useState} from 'react'


export default function Register  ()  {

  const [Name, setName]= useState('');
  const [LastName, setLastName]= useState('');
  const [gender, setgender]= useState('');
  const [email, setemail]= useState('');
  const [phone, setphone]= useState('');
  const [password, setpassword]= useState('');

    const add = () => {
        axios.post('http://localhost:5000/api/register', {
            Name:Name,
            LastName:LastName,
            gender:gender,
            email:email,
            phone:phone,
            password:password
        });
    }

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
          <TextField fullWidth label="Name" placeholder="Enter your name" 
          onChange={(event) =>{
            setName(event.target.value)}} />
          <TextField
            fullWidth
            label="LastName"
            placeholder="Enter your LastName"
            onChange={(event) =>{
              setLastName(event.target.value)}}
          />
          <br />
          <br />
          <FormControl component="fieldset" sytle={marginTop}
          onChange={(event) =>{
            setgender(event.target.value)}}>
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
          <TextField fullWidth label="Email" placeholder="Enter your Email"
          onChange={(event) =>{
            setemail(event.target.value)}} />
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your Phone"
            onChange={(event) =>{
              setphone(event.target.value)}}
          />
          <TextField fullWidth label="Password"
          onChange={(event) =>{
            setpassword(event.target.value)}} />
          <br />
          <br />
            <Grid item>
              <Button type="submit" variant="contained" color="primary" onClick={add}>
                Sing up
              </Button>
            </Grid>
        </form>
      </Paper>
    </Grid>
  );
};


