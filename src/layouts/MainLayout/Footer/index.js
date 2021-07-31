import React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#131313",
    color: "#fff",
    width: "100vw",
    position: "relative",
  },
  iconSocialMedia: {
    color: "#fff",
  },
  gridContainer:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr"
  },
  socialMediaList:{
      '& ListItem':{
          display: "flex",
          flexDirection: "column"
      }
  },
  logo:{
      position: "relative",
      top: "0.3rem",
      left: "6.2rem"
  },
  footerHeader:{
      '& .MuiTypography-root':{
          fontSize: "1.3rem"
      }
  },
  copyRightPadding: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(3),
    marginLeft: theme.spacing(13)
  },
  footerCopyRightLinks:{
    textDecoration: "none", color: "#fff"
  }
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
function Footer() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container className={classes.container} maxWidth={false}>
        <Grid Container className={classes.gridContainer}>
          
          <Grid item>
            <Typography variant= "h4" className={classes.logo}>COLOR UI</Typography>
          </Grid>


          <Grid item>
            <List>
              <ListItemText className={classes.footerHeader}>About Us</ListItemText>
              <ListItem>
                <ListItemLink href="/howitworks">
                  <ListItemText primary="How it works" />
                </ListItemLink>
              </ListItem>
              <ListItem>
                <ListItemLink href="/careers">
                  <ListItemText primary="Careers" />
                </ListItemLink>
              </ListItem>
              <ListItem>
                <ListItemLink href="/tos">
                  <ListItemText primary="Terms of Services" />
                </ListItemLink>
              </ListItem>
            </List>
          </Grid>


          <Grid>
            <List>
              <ListItemText className={classes.footerHeader}>Contact Us</ListItemText>
              <ListItem>
                <ListItemIcon className={classes.iconSocialMedia}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </ListItemIcon>
                <ListItemLink href="mailto:shashankmallibhat@gmail.com">
                  <ListItemText primary="shashankmallibhat@gmail.com" />
                </ListItemLink>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.iconSocialMedia}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </ListItemIcon>
                <ListItemLink href="mailto:shashankm.is20@bmsce.ac.in">
                  <ListItemText primary="shashankm.is20@bmsce.ac.in" />
                </ListItemLink>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.iconSocialMedia}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemLink href="tell:+917619380938">
                  <ListItemText primary="+917619380938" />
                </ListItemLink>
              </ListItem>
            </List>
          </Grid>


          <Grid item>
            <List className={classes.socialMediaList}>
            <ListItemText className={classes.footerHeader}>Follow Us</ListItemText>
              <ListItem component="a" href="https://www.instagram.com/shash._mallibhat">
                <ListItemIcon>
                  <img src="../../../icons/socialwhite/in.svg" alt="instagram" targrt_="blank"/>
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" href="#linkeden">
                <ListItemIcon>
                  <img src="../../../icons/socialwhite/li.svg" alt="linkeden" targrt_="blank"/>
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" href="#facebook">
                <ListItemIcon>
                  <img src="../../../icons/socialwhite/fb.svg" alt="facebook" targrt_="blank"/>
                </ListItemIcon>
              </ListItem>
              <ListItem component="a" href="#twitter">
                <ListItemIcon>
                  <img src="../../../icons/socialwhite/tw.svg" alt="twitter" targrt_="blank"/>
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
        </Grid>


        <Grid className={classes.copyRightPadding}>
          <Typography display="block" variant="body2" color="#fff">
            {'Copyright © '}
            {new Date().getFullYear()}{' '}
            <Link color="#fff" href="/" className={classes.footerCopyRightLinks} style={{
                fontSize: "17px"
            }}>
              Color UI
            </Link>
            {' | All rights reserved.'}
          </Typography>

          <Typography
            display="block"
            gutterBottom
            variant="body2"
            color="#fff"
          >
            <Link color="#fff" to="/privacy" className={classes.footerCopyRightLinks} >
              Privacy Policy
            </Link>
            {' | '}

            <Link color="#fff" to="/terms" className={classes.footerCopyRightLinks}>
              Terms of Use
            </Link>
            {' | '}

            <Link color="#fff" to="/refundpolicies" className={classes.footerCopyRightLinks}>
              Refund &amp; Cancellation Policy
            </Link>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
