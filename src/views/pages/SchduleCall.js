import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TopBar from "../../layouts/MainLayout/TopBar";
import Footer from "../../layouts/MainLayout/Footer";
import clsx from "clsx";
import ButtonComponent from "../../components/Button/ButtonComponent";
import instance from "../../utils/axios";

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
}));

function ScheduleCall() {
  const classes = useStyles();
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [help, setHelp] = useState("");

  let handleKeyName = function (event) {
    setName(name + event.key);
  };
  let handleKeyPhone = function (event) {
    setPhoneNumber(phoneNumber + event.key);
  };
  let handleKeyEmail = function (event) {
    setEmail(email + event.key);
  };
  let handleKeyHelp = function (event) {
    setHelp(help + event.key);
  };
  let submitForm = function () {
    let data = {
      Name: name,
      phone_number: phoneNumber,
      Email: email,
      Help: help,
    };
    // console.log(data);
    data = JSON.stringify({
      Name: name,
      phone_number: phoneNumber,
      Email: email,
      Help: help,
    });
    instance
      .post("http://localhost:5000/submit/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setPhoneNumber("");
    setEmail("");
    setHelp("");
  };
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
          <h1 className={classes.heading}>Schedule a Call</h1>
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
              onKeyUp={handleKeyName}
            />
            <CssTextField
              label="Enter Your Phone Number"
              variant="outlined"
              className={classes.feilds}
              onKeyUp={handleKeyPhone}
            />
            <CssTextField
              label="Enter Your Email"
              variant="outlined"
              className={classes.feilds}
              color="#1976d3"
              onKeyUp={handleKeyEmail}
            />
            <CssTextField
              label="How Can We Help You?"
              multiline
              rows={6}
              variant="outlined"
              className={classes.feilds}
              onKeyUp={handleKeyHelp}
            />
            <ButtonComponent
              title="Submit"
              style={{
                top: "-0.5em",
              }}
              onClick={submitForm}
            />
          </div>
        </form>
        <div style={{ position: "relative", top: "-66px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default ScheduleCall;
