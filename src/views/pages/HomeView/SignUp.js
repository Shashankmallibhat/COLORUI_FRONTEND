import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { CssBaseline } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#131313",
    padding: "8rem",
    minWidth: "100vw",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "4rem",
    },
    [theme.breakpoints.up("xs")]: {
      padding: "2rem 0",
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.4rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.3rem",
      },
    },
    "& p": {
      marginTop: "1rem",
      fontSize: "2rem",
      fontWeight: "700",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.65rem",
        margin: "0",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "36%",
    },
    [theme.breakpoints.down("lg")]: {
      flexBasis: "36%",
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
    flexBasis: "0",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      margin: "4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40vh",
      margin: "4rem 4rem 1rem 0rem",
      flexBasis: "0",
    },
  },
  userIcon: {
    color: "#fff",
    fontSize: "14rem",
    height: "400px",
    width: "400px",
    [theme.breakpoints.down("md")]: {
      fontSize: "10rem",
    },
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
      "& .MuiGrid-grid-xs-5": {
        maxWidth: "400px",
      },
      display: "flex",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
      margin: "2rem",
      "& .MuiGrid-grid-xs-5": {
        maxWidth: "318px",
        marginRight: "0",
        flexBasis: "0",
      },
      "& .MuiGrid-grid-xs-6": {
        maxWidth: "unset",
        flexBasis: "0",
      },
    },
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
          className={classes.gridContainer}
        >
          <Grid item xs={6} className={classes.text}>
            <h1>Join Our Team</h1>
            <h2>Sign Up Today</h2>
            <p>See what makes us different</p>
            <Link to="/signin" className={classes.links}>
              <ButtonComponent title="Sign Up" />
            </Link>
          </Grid>
          <Grid item xs={5} className={classes.icon}>
            <div>
              <FontAwesomeIcon icon={faUsers} className={classes.userIcon} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SignUp;
