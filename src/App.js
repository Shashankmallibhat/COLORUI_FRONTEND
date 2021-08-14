import React, { useEffect, useState } from "react";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollReset from "./components/ScrollReset";
import Routes from "./Routes";
import { CssBaseline } from "@material-ui/core";
import { firebase } from "./utils/firebase";

let UserContext = React.createContext();
const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
        overflow: "hidden",
        color: "#000",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);
const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
});
const history = createBrowserHistory();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  useStyles();
  return (
    <MuiThemeProvider theme={THEME}>
      <UserContext.Provider value={{ user, setUser }}>
        <Router history={history}>
          <ScrollReset />
          <Routes />
          <CssBaseline />
        </Router>
      </UserContext.Provider>
    </MuiThemeProvider>
  );
}

export { App, UserContext };
