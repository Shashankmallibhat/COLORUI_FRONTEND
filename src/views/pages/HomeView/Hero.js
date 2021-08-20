import React from "react";
import {Container, CssBaseline, makeStyles } from "@material-ui/core";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#131313",
  },
  container1: {
    // background: "#000000",
    background: "linear-gradient(to right, #161616, #000000)",
    position: "relative",
    minWidth: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  desc1: {
    color: "#fff",
    fontSize: "100px",
    marginBottom: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "90px",
      marginBottom: "0",
      top: "-21px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "70px",
    },
  },
  highlight: {
    fontSize: "100px",
    marginBottom: "24px",
    marginLeft: "16px",
    // background: "##ee0979",
    // background: "-webkit-linear-gradient(to right #ff6a00, #ee0979) ",
    background: "linear-gradient(to right,#ff6a00,#ee0979)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      fontSize: "90px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "70px",
    },
  },
  desc2: {
    fontSize: "68px",
    // background: "#da22ff",
    // background: "-webkit-linear-gradient(to right,#9114ff,#da22ff) ",
    background: "linear-gradient(to right,#8f0eff,#da22ff) ",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
      left: "0",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  btn: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "150px",
    },
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
}));
function Hero({ className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container1}>
          <div className={classes.main}>
            <h1 className={classes.desc1}>Choose your</h1>
            <h1 className={classes.highlight}>Colors</h1>
          </div>
            <p className={classes.desc2}>Unlimited Possibilites</p>
          <ButtonComponent
            title="Explore"
            className={classes.btn}
            onClick={() => {
              history.push("/services");
            }}
          />
      </Container>
    </>
  );
}

export default Hero;
