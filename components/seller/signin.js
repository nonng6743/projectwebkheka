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





const Signin = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: "50%",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <br />
            <br />
            <Typography>
              <p className="text-3xl">Seller Centre</p>
            </Typography>
            <Typography>
              <p className="italic text-base ">
                เครื่องมือจัดการร้านค้าอย่างมีประสิทธิภาพ
              </p>
            </Typography>
            <br/>
            <img src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/modules/account/image/login-img.9347138.png" 
            alt="" className="w-full"style={{with:"100",height:"100" }}/>
          </Grid>
          <Grid item xs={6}>
            <Grid align="center">
              <br/>
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <br />
              <Typography>เข้าสู่ระบบ Seller Centre</Typography>
            </Grid>
            <TextField
              label="Email"
              placeholder="Enter Email"
              fullWidth
              required
            />
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
              เข้าสู่ระบบ
            </Button>
            
            
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signin;
