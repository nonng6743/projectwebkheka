import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const login = () => {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 350,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <br />
          <h2>Sign In</h2>
        </Grid>
        <TextField label="Email" placeholder="Enter Email" fullWidth required />
        <br />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <br />
        <br />
        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          style={btnstyle}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Grid align="center">
          <br />
          <Typography>
            <h5>Or Sign Up Using</h5>{" "}
          </Typography>
          <br />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ margin: "8px 0", backgroundColor: "#4267b2", color: "#fff" }}
        >
          Facebook
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ margin: "8px 0", backgroundColor: "#ea4335", color: "#fff" }}
        >
          Google
        </Button>
        <Typography>
          {" "}
          Do you have an account ?<Link href="/Signup">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default login;
