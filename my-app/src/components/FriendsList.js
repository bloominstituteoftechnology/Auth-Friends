import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Div = styled.div`
    display:flex;
    flex-direction: row;
    width:20%;
    justify-content:center;
    flex-wrap:wrap;
    margin:1%;
    min-width:200px
`;
const FriendsList = (props) => {
    const classes = useStyles();
 console.log(props.friend)
 const Delete = (id) => {
    axiosWithAuth().delete(`/api/friends/${id}`)
}
// const Edit = (id) {
//     axiosWithAuth().put(`/api/friends/${id}`)
// }
    return(
    <Div>
        <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <p>{props.friend.name}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> {Delete(props.friend.id)}}>
          Delete
        </Button>
        {/* <Button size="small" color="primary">
          Edit
        </Button> */}
      </CardActions>
    </Card>
</Div>
    )
}

export default FriendsList;