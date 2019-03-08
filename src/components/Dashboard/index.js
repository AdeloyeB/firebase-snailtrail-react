import React, { useEffect, useState } from "react";
import { Typography, Paper, CircularProgress, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "../firebase";
import { withRouter } from "react-router-dom";
import NavBar from "../../NavBar";
import ButtonAppBar from "../../ButtonAppBar";
import DashboardCard from "../DashboardCard";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function Dashboard(props) {
  const { classes } = props;

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Please login first");
    props.history.replace("/login");
    return null;
  }

  const [quote, setQuote] = useState("");

  useEffect(() => {
    firebase.getCurrentUserQuote().then(setQuote);
  });

  return (
    <div>
      <ButtonAppBar />
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Hello {firebase.getCurrentUsername()}
          </Typography>
          <Typography component="h1" variant="h5">
            Your quote: {quote ? `"${quote}"` : <CircularProgress size={20} />}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="text"
            color="default"
            onClick={logout}
            className={classes.submit}
          >
            Logout
          </Button>
        </Paper>
        <Paper>
          <DashboardCard />
        </Paper>
      </main>
    </div>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}

export default withRouter(withStyles(styles)(Dashboard));
