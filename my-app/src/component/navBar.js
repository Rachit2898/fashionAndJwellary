import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../images/images.png";

import { GiHamburgerMenu as Menu } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: "black",
    margin: 0,
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
  },

  logo: {
    height: "60px",
    width: "150px",
  },
  button: {
    color: "white",
    textAlign: "left",
    fontFamily: "Arnoldboecklin, fantasy",
  },
  buttonDiv: {
    marginLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
  },
  buttonDivRes: {
    display: "none",
  },
  hamburger: {
    display: "none",
  },

  "@media (min-width: 0px) and (max-width: 800px)": {
    navbar: {
      backgroundColor: "black",
      display: "flex",
    },
    logo: {
      height: "50px",
      width: "120px",
      marginRight: "auto",
    },
    hamburger: {
      margin: "auto 15px",
      display: "block",
    },
    buttonDiv: {
      display: "none",
    },
    buttonDivRes: {
     marginTop:"45px",
      display: "flex",
      flexDirection: "column",
      textAlign: "left !important",
      position: "absolute",
      paddingRight: "0",
      right: "0",
      

    },
    "@media (min-width: 800px) and (max-width: 850px)": {
      button: {
       fontSize: "0.675rem"
      }

    }
  },
}));

export default function ButtonNavBar() {
  const classes = useStyles();
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenu = () => {
    console.log("clicked")
    setShowMenu(!showMenu);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <img src={logo} alt="logo" className={classes.logo} />
        <Menu className={classes.hamburger} onClick={handleMenu}></Menu>
        <Toolbar className={classes.buttonDiv}>
          <Button className={classes.button}>Home</Button>
          <Button className={classes.button}>Products</Button>
          <Button className={classes.button}>Collections</Button>
          <Button className={classes.button}>Sterling Silver</Button>
          <Button className={classes.button}>Contact Us</Button>
          <Button className={classes.button}>About Us</Button>
          </Toolbar>
          {showMenu === true ? (
          
            <Toolbar className={classes.buttonDivRes}>
              <Button className={classes.button}>Home</Button>
              <Button className={classes.button}>Products</Button>
              <Button className={classes.button}>Collections</Button>
              <Button className={classes.button}>Sterling Silver</Button>
              <Button className={classes.button}>Contact Us</Button>
              <Button className={classes.button}>About Us</Button>
            </Toolbar>
          ) : null}
        
      </AppBar>
    </div>
  );
}
