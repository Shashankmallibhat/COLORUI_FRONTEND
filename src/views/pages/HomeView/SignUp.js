import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { CssBaseline } from "@material-ui/core";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    left: "5rem",
  },
  container: {
    backgroundColor: "#131313",
    padding: "10rem",
    height: "100vh",
    minWidth: "100vw",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    "& h1": {
      fontSize: "2rem",
      backgroundColor: "#fe3b6f",
      backgroundImage: "linear-gradient(to top, #ff087b 0%, #ed1852 100%)",
      backgroundSize: "100%",
      WebkitBackgroundClip: "text",
      MozBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      MozTextFillColor: "transparent",
      textTransform: "uppercase",
      marginBottom: "13px",
    },
    "& h2": {
      fontSize: "3rem",
      // background: "#ff8177",
      // background: "-webkit-linear-gradient(to right,#9114ff,#da22ff)",
      background: "linear-gradient(to right,#8f0eff,#da22ff)",
      WebkitBackgroundClip: "text",
      MozBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      MozTextFillColor: "transparent",
    },
    "& p": {
      marginTop: "1rem",
      fontSize: "2rem",
      fontWeight: "700",
    },
  },
  icon: {
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #dd2476, #ff512f)",
    alignItems: "center",
    width: "600px",
    margin: "25px",
  },
  usericon: {
    color: "#fff",
    fontSize: "14rem",
    height: "400px",
    width: "400px",
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function SignUp({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container className={classes.container} maxWidth={false}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing="4"
        >
          <Grid item xs={6} className={clsx(classes.text, classes.root)}>
            <h1>Join Our Team</h1>
            <h2>Sign Up Today</h2>
            <p>See what makes us different</p>
            <Link to="/signup" className={classes.links}>
              <ButtonComponent title="Sign Up" />
            </Link>
          </Grid>
          <Grid item xs={5} className={classes.icon}>
            <div>
              <FontAwesomeIcon icon={faUsers} className={classes.usericon} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SignUp;
