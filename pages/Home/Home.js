import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Layout from '../../components/Layout';
import Productall from '../../components/products/productall'
import Slick from '../../components/slick'

const Home = () => {
  
  return (
    <Layout>
    <Grid>
      <Slick />
      <Productall />
    </Grid>
    </Layout>
  );
};

export default Home;
