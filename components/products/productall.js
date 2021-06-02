import React from "react";
import { Grid, Paper } from "@material-ui/core";
import ProductCard from "./card";

const Productall = () => {
  const paperStyle = { padding: "30px 20px", margin: "20px auto" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>สินค้าเเนะนำ</h1>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>สินค้าทั้งหมด</h1>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Productall;
