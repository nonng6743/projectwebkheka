import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Layout from '../../components/Layout';
import Productall from '../../components/products/productall'

const Home = () => {
  const paperStyle = { padding: "30px 20px", width:"90%",  height: "40vh", margin: "20px auto"};

  return (
    <Layout>
    <Grid>
      
      <Paper elevation={20} style={paperStyle}>
      <Grid align="center">
        <h1>ประกาศโปรโมชัน สินค้าต่างๆ</h1>
      </Grid>
      </Paper>
      <Productall />
    </Grid>
    </Layout>
  );
};

export default Home;
