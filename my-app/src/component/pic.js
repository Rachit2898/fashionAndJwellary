import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Image from "../images/sara5.jpg";
import Image1 from "../images/sara7.jpg";
import Image2 from "../images/sara6.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0)",
    margin: "0",
    fontFamily: 'Arnoldboecklin, fantasy',
  },
  pics: {
    width: "350px",
    height: "350px",
    margin: "10px",
  
  },
  list: { width: 1200, height: 450, margin: "auto", marginTop: "200px",  },
  "@media (min-width: 0px) and (max-width: 800px)": {
    pics: {
      width: "70%",
      height: "50%",
      margin: "0.875rem",
      margin:"auto"
      
    },
    list:{
      display: "flex !important",
      width: "100%",
      flexDirection: "column",
      marginTop:"20px"
    }
  },
  "@media (min-width: 800px) and (max-width: 1200px)": {
    
    list:{
      display: "flex !important",
      width: "100%",
      flexDirection: "column",
      marginTop:"20px"
    },
    pics: {
      width: "50%",
      height: "50%",
      margin: "0.875rem",
      margin:"auto"
    },
  },
}));

export default function TitlebarImageList() {
  const classes = useStyles();
  return (
    <ImageList className={classes.list}
    >
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className={classes.pics}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar style = {{fontFamily: 'Arnoldboecklin, fantasy'}} title={item.title} subtitle={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Image,
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Image1,
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: Image1,
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: Image2,
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: Image1,
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: Image2,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Image1,
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: Image1,
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: Image1,
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: Image2,
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: Image2,
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: Image1,
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
