import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  btn: {
  fontSize: "1.8rem",
    //   background: "#833ab4",
    //   background: "-webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
    background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
    padding: "20px 60px",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    marginTop: "2rem",
    cursor: "pointer",
    position: "relative",
    // transition: "all 0.35s",
    outline: "none",
  },
  '&::after':{
    position: "absolute",
    content: '" "',
    top: 0,
    left: 0,
    width: 0,
    height: "100%",
    background: "#ff1ead",
    transition: "all 0.35s",
    borderRadius: "4px",
  },
  '&:hover':{
    color: "#fff",   //transtions issue pending
  },
  '&:hover:not($disabled):not($error):not($focused):after':{
    width: "100%"
  },
}));

function ButtonComponent({ className, title, href, ...rest }) {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.btn, className)} href={href} {...rest}>
      {title}
    </Button>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string
};

export default ButtonComponent;