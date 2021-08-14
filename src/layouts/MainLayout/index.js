import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

const useStyles = makeStyles(() => ({
  root: {

    display: ' flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    flexDirection: "column"
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden auto',
    bottom: "50px"
  }
}));

function MainLayout({ children }) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
  
  MainLayout.propTypes = {
  children: PropTypes.any
  };
  
export default MainLayout;