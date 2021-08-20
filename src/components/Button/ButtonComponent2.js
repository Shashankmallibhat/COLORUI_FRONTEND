import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "#131313",
    },
  },
  btn: {
    color: "#fff",
    padding: "14px 24px",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    background: "#131313",
    fontSize: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function ButtonComponent2({ className, title, ...rest }) {
  const classes = useStyles();
  return (
    <Button
      className={clsx(classes.btn, classes.root, className)}
      {...rest}
      disableElevation
    >
      {title}
    </Button>
  );
}

ButtonComponent2.propTypes = {
  title: PropTypes.string,
};

export default ButtonComponent2;
