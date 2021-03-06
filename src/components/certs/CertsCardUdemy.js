import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 340,
  },

  avatar: {
    backgroundColor: red[500],
  },
  img: {
    maxHeight: "300px",
    width: "auto",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "2rem",
    },
  },
  media: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hover: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const CertsCardUdemy = (props) => {
  const classes = useStyles();
  const certObject = require(`../../certificates/udemy/${props.info.img}`);
  const certURL = certObject.default;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            U
          </Avatar>
        }
        title={props.info.title}
      />
      <CardMedia
        className={classes.img}
        component="img"
        alt={props.info.title}
        height="240"
        src={certURL}
        title={props.info.title}
      />
      <CardContent className={classes.media}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.info.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CertsCardUdemy;
