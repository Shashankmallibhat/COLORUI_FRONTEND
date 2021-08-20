import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { CssBaseline } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0",
    background: "#131313",
    minWidth: "100vw",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
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
      [theme.breakpoints.down("md")]: {
        fontSize: "1.8rem",
        margin: "0",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.65rem",
        margin: "0",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
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
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.4rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.3rem",
      },
      [theme.breakpoints.between("xs", "sm")]: {
        lineHeight: "50px",
      },
    },
    "& p": {
      marginTop: "1rem",
      fontSize: "2rem",
      fontWeight: "700",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.65rem",
        margin: "0",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      flex: "1",
    },
  },
  btn: {
    [theme.breakpoints.down("md")]: {
      width: "34vw"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "3rem 0",
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
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      margin: "4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      margin: "4rem 4rem 1rem 0",
      flexBasis: "0",
    },
  },
  layericon: {
    color: "#fff",
    height: "400px",
    width: "400px",
    fontSize: "14rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "8rem",
    },
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      "& .MuiGrid-grid-xs-4": {
        maxWidth: "400px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      margin: "2rem",
      "& .MuiGrid-grid-xs-4": {
        maxWidth: "320px",
        marginRight: "1rem",
      },
    },
  },
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
          className={classes.gridContainer}
        >
          <Grid item xs={4} className={classes.icon}>
            <div>
              <FontAwesomeIcon
                icon={faLayerGroup}
                className={classes.layericon}
              />
            </div>
          </Grid>
          <Grid item xs={4} className={classes.text}>
            <h1>What can we do for you?</h1>
            <h2>We help you to get awesome Colors</h2>
            <p>Schedule a call to learn more about our services</p>
            <Link to="/scall" className={classes.links}>
              <ButtonComponent title="Schedeule Call" className={classes.btn} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Feature;
