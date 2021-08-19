import React, { useContext } from "react";
import { Button, makeStyles, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TopBar from "../../layouts/MainLayout/TopBar";
import Footer from "../../layouts/MainLayout/Footer";
import clsx from "clsx";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { firebase } from "../../utils/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import { UserContext } from "../../App";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
};
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
    "& .PrivateNotchedOutline-legendLabelled-17": {
      fontSize: "0.63em",
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
    position: "relative",
  },
  feilds: {
    width: "25vw",
    padding: "7px 0px",
    paddingTop: "3px",
    margin: "7px 0",
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      width: "35vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "62vw",
    },
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
  signuptext: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
  },
}));

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiDialog-paperScrollPaper": {
      background: "#1976d3",
    },
    "& .MuiTypography-h6": {
      fontSize: "28px",
      color: "#fff",
      margin: "0 50px",
    },
  },
}));
function Login(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyle();
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.root}
    >
      <DialogTitle id="simple-dialog-title">Login</DialogTitle>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Dialog>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
function Log() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };
  let { user } = useContext(UserContext);

  return !user ? (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ margin: "0 10px" }}
      >
        Login
      </Button>
      <Login open={open} onClose={handleClose} />
    </div>
  ) : (
    <div></div> //just remove the button on login or else it will show up since Log function is outside the if function down
  );
}
function SignIn() {
  let { user } = useContext(UserContext);
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
        {user ? (
          <>
            <h1
              style={{
                zIndex: "12",
                background: "linear-gradient(to right,#1FA2FF,#12D8FA,#A6FFCB)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                MozTextFillColor: "transparent",
                fontSize: "5rem",
                position: "relative",
                left: "20rem",
                top: "5rem",
              }}
            >
              You have logged in already
            </h1>
            <div style={{ position: "relative", top: "10rem" }}>
              <Footer />
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                background: "linear-gradient(to right, #161616, #000000)",
                margin: "0",
                zIndex: 3,
                position: "relative",
              }}
            >
              <h1 className={classes.heading}>Sign IN</h1>
            </div>
            <h2
              style={{
                color: "#fff",
                position: "relative",
                zIndex: "10",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Login with google or phone {Log()}
            </h2>
            <h3
              style={{
                color: "#fff",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                zIndex: "10",
              }}
            >
              Or use your account
            </h3>
            <form
              className={clsx(classes.root, classes.form)}
              noValidate
              autoComplete="off"
            >
              <div className={classes.formBox}>
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
                <ButtonComponent
                  title="Sign In"
                  style={{
                    top: "-0.5em",
                  }}
                />
              </div>
              <h2 className={classes.signuptext}>
                <a href="signup">Don't have an account?</a>
              </h2>
            </form>
            <div style={{ position: "relative", top: "-100px" }}>
              <Footer />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignIn;
