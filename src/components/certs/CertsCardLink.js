import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  avatar: {
    backgroundColor: blue[500],
  },
  img: {
    objectFit: "fill",
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

const CertsCardLink = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root && classes.hover}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            in
          </Avatar>
        }
        title={props.info.title}
      />
      <CardMedia
        component="img"
        alt={props.info.title}
        height="240"
        src={props.info.img}
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

export default CertsCardLink;
