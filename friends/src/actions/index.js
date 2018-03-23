import fetch from 'cross-fetch';
export const ADD = "ADD";
export const REQUEST_FRIENDS = 'REQUEST_FRIENDS';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

function requestFriends(){
  return {
    type:REQUEST_FRIENDS
  }
}
function receiveFriends(){
  return {
    type:RECEIVE_FRIENDS
  }
}

export function fetchFriends(){
  return function(dispatch){
    dispatch(requestFriends());
    return fetch('http://localhost:5000/api/friends')
    .then(
      (res,err)=>{
        dispatch(requestFriends());
        console.log(res);
        console.log(err,);
      })
    .then( ()=>{
      dispatch(receiveFriends());
    });
  }
}

export const add = (n,a,e,i) =>{
  return {
    type:ADD,
    name:n,
    age:a,
    email:e,
    id:i
  }
}
