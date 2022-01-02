import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pic from './pic'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    para:{
        backgroundColor:'black',
        color:'white',
        fontFamily: 'Arnoldboecklin, fantasy',
        paddingTop:'100px',
        fontSize:'20px'
    },
    "@media (min-width: 0px) and (max-width: 800px)": {
        para:{
            backgroundColor:'black',
            color:'white',
            fontFamily: 'Arnoldboecklin, fantasy',
            paddingTop:'20px',
            fontSize:'1rem',
            margin: "auto"
        },
        
      }
}));

export default function ButtonNavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.para}>
                <p><b>Crafting kundan-jadau heirlooms in silver since 2004 with an aim of unearthing beauty that is found at the cusp of luxury and wearability. </b></p>
                <Pic></Pic>
            </div>
        </div>
    );
}