import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";

export default function App() {

  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="Slick">
        <Paper elevation={20} >
      <Grid align="center">
          <br/>
        <h1 style={{color:"#000"}}>ประกาศโปรโมชัน สินค้าต่างๆ</h1>
        <br/>
      </Grid>
      <Grid>
      <Slider dots={true}>{renderSlides()}</Slider>
      <br/>
      <br/>
      </Grid>
      </Paper>
      
    </div>
  );
}


