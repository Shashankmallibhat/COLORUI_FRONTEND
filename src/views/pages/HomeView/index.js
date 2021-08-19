import React from "react";
import Page from "../../../components/Page";
import Hero from "./Hero";
import Feature from "./Feature";
import Services from "./Services";
import SignUp from "./SignUp";
import Footer from "../../../layouts/MainLayout/Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
}));

function HomeView() {
  const classes = useStyles();
  return (
    <Page title="Color UI" className={classes.root}>
      <Hero />
      <Feature />
      <Services />
      <SignUp />
      <Footer />
    </Page>
  );
}

export default HomeView;
