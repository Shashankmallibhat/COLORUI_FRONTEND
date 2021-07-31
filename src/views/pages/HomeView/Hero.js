import React from "react";
import { Box, Container, CssBaseline, makeStyles } from "@material-ui/core";
import ButtonComponent from "../../../components/Button/ButtonComponent";

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
  },
  desc1: {
    fontSize: "100px",
    marginBottom: "24px",
    color: "#fff",
    position: "relative",
    top: "-0.7em",
  },
  highlight: {
    fontSize: "100px",
    marginBottom: "24px",
    marginLeft: "16px",
    position: "relative",
    top: "-0.7em",
    // background: "##ee0979", 
    // background: "-webkit-linear-gradient(to right #ff6a00, #ee0979) ",
    background: "linear-gradient(to right,#ff6a00,#ee0979)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
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
    top: "-1.3em",
    right: "-1.4em"
  },
}));
function Hero({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline/>
      <Container className={classes.container1}>
        <Box>
          <div style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <h1 className={classes.desc1} >Choose your</h1>
            <h1 className={classes.highlight}>Colors</h1>
          </div>
          <div>
            <p className={classes.desc2}>Unlimited Possibilites</p>
          </div>
          <ButtonComponent title="Explore" style={{
          top: "-2em",
          right: "-9.5em"}}/>
        </Box>
      </Container>
    </div>
  );
}

export default Hero;
