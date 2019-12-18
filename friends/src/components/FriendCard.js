import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    minHeight: 250,
    marginTop: 100,
    marginBottom: 30,
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 2
  },
  subtitle: {
    fontSize: 18,
    paddingTop: 20
  },
  content: {
    fontSize: 20,
    paddingBottom: 20
  }
});

export default function FriendCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          {props.items.name}
        </Typography>
        <Typography className={classes.subtitle}>Age</Typography>
        <Typography className={classes.content} color="textSecondary">
          {props.items.age}
        </Typography>
        <Typography className={classes.subtitle}>Email</Typography>
        <Typography
          className={classes.content}
          component="p"
          color="textSecondary"
        >
          {props.items.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
