import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "react-spring";
import PlainColorData from "../../ColorData/PlainColorData";
import Footer from "../../layouts/MainLayout/Footer";
import MainLayout from "../../layouts/MainLayout";
import '../../index.css';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    background: "#131313",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
    gridGap: "25px",
    padding: "25px",
    background: "white",
    borderRadius: "5px",
    boxShadow: " 0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
    willChange: "width, height,margin-top",
    marginBottom: "76px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
    },
  },

  item: {
    width: "100%",
    background: "white",
    borderRadius: "5px",
    willChange: "transform, opacity",
    height: "100px",
    cursor: "pointer",
  },
  text: {
    textAlign: "center",
    position: "absolute",
    top: "50px",
    left: "5px",
    cursor: "pointer",
  },
  popover: {
    pointerEvents: "none",
    boxShadow: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));
function PlainColors() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const springApi = useSpringRef();
  const { sizew, sizeh, marginTop, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      sizew: "20vw",
      sizeh: "20vh",
      marginTop: "40px",
      backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    },
    to: {
      sizew: open ? "100vw" : "20vw",
      sizeh: open ? "auto" : "20vh",
      marginTop: open ? "0" : "40px",
      backgroundImage: open
        ? "#131313"
        : "linear-gradient(to right, #4facfe , #00f2fe)",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? PlainColorData : [], {
    ref: transApi,
    trail: 400 / PlainColorData.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
      <MainLayout>
        <div className={classes.wrapper}>
          <animated.div
            style={{ ...rest, width: sizew, height: sizeh, marginTop: marginTop }}
            className={classes.container}
            onClick={() => setOpen((open) => !open)}
          >
            {!open ? (
              <h2 className={classes.text}>
                Click this button to get the colors
              </h2>
            ) : (
              ""
            )}
            {transition((style, item) => (
              <animated.div
              className={classes.item}
              style={{ ...style, background: item.css, display:"flex", alignItems: "center", justifyContent: "center" }}
            > 
            <h3 className="hexcodes" hexcode={item.description}> </h3>
            </animated.div>
            ))}
          </animated.div>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
}
export default PlainColors;
