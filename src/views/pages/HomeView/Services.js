import React from "react";
import { Container, Grid, makeStyles, Card } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import ButtonComponent2 from "../../../components/Button/ButtonComponent2";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#131313",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    margin: "0",
  },
  header: {
    backgroundColor: "#ff8177",
    backgroundImage: " linear-gradient(to top, #ff0844 0%, #f7673c 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    marginBottom: "5rem",
    fontSize: "2.5rem",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  serviceCard: {
    margin: "10px",
    height: "425px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #00dbde, #fc00ff)",
    "&:nth-child(2)": {
      // background: "#de6262",
      // background: "-webkit-linear-gradient(to top,#ffb88c,#de6262)",
      background: "linear-gradient(to top,#ffb88c,#de6262)",
    },
    "&:nth-child(3)": {
      // background: "#5433ff",
      // background: "-webkit-linear-gradient(to top,#a5fecb,#20bdff,#5433ff)",
      background: "linear-gradient(to top,#a5fecb,#20bdff,#5433ff)",
    },
    "& p": {
      marginTop: "24px",
      fontSize: "28px",
      textAlign: "center",
    },
    "& h2": {
      textAlign: "center",
      fontSize: "28px",
    },
    "& .MuiPaper-root": {
      borderRadius: "0",
      backgroundColor: "inherit",
      boxShadow: "none",
      color: "#fff",
    },
  },
  btn: {
    position: "relative",
    left: "4.75rem",
    marginTop: "1rem",
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
}));

function Services({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container className={classes.container} maxWidth={false}>
        <h1 className={classes.header}>OUR SERVICES</h1>
        <Grid Container className={classes.gridContainer}>
          <Grid item className={classes.serviceCard}>
            <Card>
              <h2>Custom Colorways</h2>
              <p>AI Powered technology</p>
              <Link to="/flatcolors" className={classes.links}>
                <ButtonComponent2 title="Get Started" className={classes.btn} />
              </Link>
            </Card>
          </Grid>
          <Grid item className={classes.serviceCard}>
            <Card>
              <h2>Are you Ready?</h2>
              <p>Take the leap</p>
              <Link to="/plaincolors" className={classes.links}>
                <ButtonComponent2 title="Get Started" className={classes.btn} />
              </Link>
            </Card>
          </Grid>
          <Grid item className={classes.serviceCard}>
            <Card>
              <h2>Full Gradients</h2>
              <p>100 Combinations</p>
              <Link to="/gradcolors" className={classes.links}>
                <ButtonComponent2 title="Get Started" className={classes.btn} />
              </Link>
            </Card>
          </Grid>
          <Grid item className={classes.serviceCard}>
            <Card>
              <div>
                <h2>100 Combinations</h2>
                <p>Infinite Choices</p>
              </div>
              <Link to="/combcolors" className={classes.links}>
                <ButtonComponent2 title="Get Started" className={classes.btn} />
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Services;
