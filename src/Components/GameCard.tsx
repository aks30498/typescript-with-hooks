import React, { FC } from 'react'
import {Game} from '../Redux/Reducers/Types/games'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      flexBasis: '33%',
      marginBottom: '1em',
      boxShadow: '0px 4px 4px 4px rgba(0,0,0,0.1)'
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
  }));
  

const GameCard:FC<Game> = ({name, image, metacritic}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader
        title={name}
        subheader={`metacritic rating ${metacritic}`}
      />
       <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
    </Card>
   )
 }

export default GameCard