import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { HashLink as Link } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { firebase } from "../../../utils/firebase";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    width: "100vw",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    backgroundColor: "#ff8177",
    backgroundImage: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "3rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerBody: {
    display: "flex",
    flexDirection: "column",
    fontSize: "3rem",
    position: "relative",
    right: "38px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  drawerListItem2: {
    margin: "10px 26px",
    fontSize: "1.7rem",
    textDecorationLine: "none",
    " &:hover": {
      color: "#9518fc",
    },
  },
  root: {
    "& .MuiMenu-list": {
      background: "#131313",
      color: "#fff",
    },
  },
  links: {
    textDecoration: "none",
    color: "#fff"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  // const pathname = window.location.pathname;
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.root}
    >
      <Link to="/signup" className={classes.links}>
        <MenuItem onClick={handleMenuClose} className={classes.menus}>
          Sign Up
        </MenuItem>
      </Link>
      <Link to="/signin" className={classes.links}>
        <MenuItem onClick={handleMenuClose} className={classes.menus}>
          Sign In
        </MenuItem>
      </Link>
      <MenuItem onClick={handleLogout} className={classes.menus}>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Home</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>About</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Services</p>
      </MenuItem>
    </Menu>
  );
  const drawerItemList = () => (
    <div className={classes.drawerBody}>
      <List className={classes.drawerList}>
        {
          <ListItem className={classes.drawerListItem}>
            <Link
              smooth
              to="/"
              className={classes.drawerTextStyle}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              {
                <div id="home">
                  <Typography className={classes.drawerListItem2}>
                    Home
                  </Typography>
                </div>
              }
            </Link>
            <Link
              smooth
              to="/about"
              className={classes.drawerTextStyle}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div id="about">
                <Typography className={classes.drawerListItem2}>
                  About
                </Typography>
              </div>
            </Link>
            <Link
              smooth
              to="/services"
              className={classes.drawerTextStyle}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div id="services">
                <Typography className={classes.drawerListItem2}>
                  Services
                </Typography>
              </div>
            </Link>
          </ListItem>
        }
      </List>
    </div>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar
          style={{
            background: "#131313",
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              margin: "0 30px",
            }}
          >
            <Typography className={classes.title}>ColorUI</Typography>
          </RouterLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Hidden smDown>{drawerItemList()}</Hidden>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{
                position: "relative",
                right: "10px",
              }}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Hidden mdUp>
                <MenuOutlinedIcon />
              </Hidden>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
