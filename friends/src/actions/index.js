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

export const add = (n,a,e,i) =>{
  return {
    type:ADD,
    name:n,
    age:a,
    email:e,
    id:i
  }
}

export function fetchFriends(name='',age='',email='',id=''){
  return function(dispatch){
    dispatch(requestFriends());
    console.log(name);
    if(name === ''){
      dispatch(requestFriends());
      return fetch('http://localhost:5000/api/friends')
      .then(response=>response.json())
      .then(json =>{
        json.forEach( (e,i)=>{
          let name = e.name;
          let age = e.age;
          let email = e.email;
          let id = e.id;
          dispatch(add(name,age,email,id))
        });
      })
      .then( ()=>{
        dispatch(receiveFriends());
      })
      .catch( (err)=>{
        console.log(err);
      });
    }
    else{
      dispatch(requestFriends());
      return fetch('http://localhost:5000/api/friends')
      .then( res=>{
        dispatch(receiveFriends());
        dispatch(add(name,age,email,id));
      })
      .catch( (err)=>{
        console.log(err);
      });
    }
  }
}


