import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TopBar from "../../layouts/MainLayout/TopBar";
import Footer from "../../layouts/MainLayout/Footer";
import clsx from "clsx";
import ButtonComponent from "../../components/Button/ButtonComponent";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
      fontSize: "18px",
    },
    "& label": {
      color: "#fff",
      fontSize: "18px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        fontSize: "24px",
        border: "3px solid #1976d3",
        borderRadius: "10px",
        color: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#1976d3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976d3",
      },
    },
    "& .MuiInputBase-root": {
      color: "#fefefe",
    },
    "& .PrivateNotchedOutline-legendLabelled-16": {
      fontSize: "0.6em",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    position: "relative",
    alignItems: "center",
    minWidth: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(to right, #161616, #000000)",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    background: "linear-gradient(to right, #161616, #000000)",
    width: "100vw",
    minHeight: "100vh",
    top: "-44px",
    position: "relative",
  },
  feilds: {
    width: "44vw",
    padding: "7px 0px",
    paddingTop: "3px",
    margin: "7px 0",
    fontSize: "24px",
  },
  heading: {
    fontSize: "50px",
    fontWeight: 800,
    // backgroundColor: "#ff8177",
    backgroundImage: "linear-gradient(to top, #fceabb 0%, #f8b500 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    height: "14vh",
    position: "relative",
    overflow: "hidden",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    background: "linear-gradient(to right, #161616, #000000)",
    width: "100vw",
  },
  signintext: {
    position: "relative",
    top: "-7em",
    left: "31em",
    '& a':{
        color: "#fff", textDecoration: "none"
    }
  },
}));

function SignUP() {
  const classes = useStyles();
  return (
    <div>
      <TopBar style={{ position: "fixed" }} />
      <div
        style={{
          background: "linear-gradient(to right, #161616, #000000)",
          overflow: "hidden scroll",
          height: "100vh",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, #161616, #000000)",
            margin: "0",
            zIndex: 3,
            top: "37px",
            position: "relative",
          }}
        >
          <h1 className={classes.heading}>Sign Up</h1>
        </div>
        <form
          className={clsx(classes.root, classes.form)}
          noValidate
          autoComplete="off"
        >
          <div className={classes.formBox}>
            <CssTextField
              label="Enter Your Name"
              variant="outlined"
              className={classes.feilds}
            />
            <CssTextField
              label="Enter Your Age"
              variant="outlined"
              className={classes.feilds}
            />
            <CssTextField
              label="Enter Your Email"
              variant="outlined"
              className={classes.feilds}
            />
            <CssTextField
              label="Enter Your Password"
              variant="outlined"
              className={classes.feilds}
            />
            <CssTextField
              label="Re-Enter Password"
              variant="outlined"
              className={classes.feilds}
            />
            <ButtonComponent
              title="Sign Up"
              style={{
                top: "-0.5em",
              }}
            />
          </div>
          <h2 className={classes.signintext}><a href="signin">Have an account already?</a></h2>
        </form>
        <div style={{ position: "relative", top: "-66px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SignUP;