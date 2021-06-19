import React from "react";
import Layout from "../components/Layout";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { root } from "postcss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const getStaticProps = async () => {
  const res = await fetch(
    "http://23decb10d4e4.jp.ngrok.io/k6app/getProduct.php?fbclid=IwAR0L1-m6PMKCBDPna5zrM9Fp6KjsCF6lpFPDbkevjqVcjALxa7osStvjWuM"
  );
  const date = await res.json();

  return {
    props: { dates: date },
  };
};

const gettest = ({ dates }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout>
      <h1>test productss</h1>
      {dates.map((date) => (
        <div key={date.id}>
          <Card className={root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={date.nameproduct} />
              <CardMedia className={classes.media}
              image={date.image} />
              <CardContent >
              <Typography variant="body2" color="textSecondary" component="p">
              {date.category}  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
              {date.price}  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
              {date.detail}  
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
          </Card>
        </div>
      ))}
    </Layout>
  );
};

export default gettest;
