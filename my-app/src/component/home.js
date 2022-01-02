import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from "../images/sara4.jpg"
import NavBar from './navBar'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'rgba(0,0,0)',

  },
  imgDiv: {
    
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "100% 100%",
    backgroundPosition: 'center',
    margin: 'auto',
    height: '750px',
    width: '800px', border: '1px solid black',
    dispaly:'block'
  },
  para: {
    marginTop: '550px',
    color: 'white',
    height: '120px',
    width: '100%',
    fontSize: '25px',
    fontFamily: 'Arnoldboecklin, fantasy',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    
    backgroundColor:'rgba(0,0,0,0.5)',
    
  },
  button: {
    background:'none',
    color:'white',
    fontSize: '20px',
    border: '1px solid white',
    fontFamily: 'Arnoldboecklin, fantasy',
    width: '120px',
    height: '50px',
    cursor: 'pointer', 
    marginRight:"auto"
  },
  "@media (min-width: 0px) and (max-width: 800px)": {
    imgDiv: {
    
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "100% 100%",
      backgroundPosition: 'center',
      margin: 'auto',
      height: '100%',
      width: '100%', border: '1px solid black',
      dispaly:'block'
    },
    para: {
      marginTop: '550px',
      color: 'white',
      height: '100%',
      width: '100%',
      paddingTop:"0.875rem",
      paddingBottom:"0.875rem",
      fontSize: '1rem',
      fontFamily: 'Arnoldboecklin, fantasy',
      display: 'flex',
      flexDirection:'column',
      backgroundColor:'rgba(0,0,0,0.5)',
  },
  button: {
    background:'none',
    color:'white',
    fontSize: '1rem',
    border: '1px solid white',
    fontFamily: 'Arnoldboecklin, fantasy',
    width: '100px',
    height: '30px',
    cursor: 'pointer', 
    margin:'auto'
  },
  
  }
}));

export default function ButtonNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <NavBar/>
      <div className={classes.imgDiv}>
      
        <div className={classes.para}>
          <b style={{margin:"auto"}}>A DANCE OF CRAFTSMANSHIP AND DESIGN</b>
          <button className={classes.button}><b>Shop Now</b></button>
          
        </div>
        
       
      </div>
    </div>
  );
}
