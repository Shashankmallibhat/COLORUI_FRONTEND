import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { CssBaseline } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLayerGroup} from "@fortawesome/free-solid-svg-icons"
const useStyles = makeStyles(() => ({
  container: {
    margin: "0",
    background: "#131313",
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
    backgroundImage: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
    alignItems: "center",
    width: "500px",
    margin: "25px",
  },
  layericon:{
    color: "#fff",
    height: "400px",
    width: "400px",
    fontSize: "14rem"
  }
}));

function Feature({ className, ...rest }) {
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
          spacing="3"
        >
          <Grid item xs={4} className={classes.icon}>
            <div>
              <FontAwesomeIcon icon= {faLayerGroup} className={classes.layericon}/>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.text}>
            <h1>What can we do for you?</h1>
            <h2>We help you to get awesome Colors</h2>
            <p>Schedule a call learn more about our services</p>
            <ButtonComponent title="Schedeule Call" href="/scall"/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Feature;
