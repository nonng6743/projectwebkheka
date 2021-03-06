import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";
import { Settings } from "@material-ui/icons";

export default function Slick() {
  return (
    <div className="Slick">
      <Paper elevation={20}>
        <Grid align="center">
          <br />
          <h1 style={{ color: "#000" }}>ประกาศโปรโมชัน สินค้าต่างๆ</h1>
          <br />
        </Grid>
        <Grid>
          <Slider dots={true} {...Settings}>
            <div>
              <h1>My Homepage</h1>
            </div>
            <div>
              <h1>111</h1>
            </div>
          </Slider>
          <br />
          <br />
        </Grid>
      </Paper>
    </div>
  );
}
