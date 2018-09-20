import axios from 'axios';

export const FETCHING='FETCHING';
export const FETCHED='FETCHED';
export const ERROR='ERROR';
export const POSTING='POSTING';
export const POSTED='POSTED';

 export const getFriends=()=>{
    const request=axios.get(`http://localhost:5000/api/friends/`);
    return function (dispatch) {
        dispatch({type:'FETCHING'});
        request.then(data=>{
            dispatch({type: 'FETCHED',payload: data});
        }).catch(err=>{
            dispatch({type:'ERROR'})
        })
    }
}

export const addFriend=(newFriend)=>{
    
  const request=axios.post(`http://localhost:5000/api/friends/`,newFriend);
  return function(dispatch){
      dispatch({type:'POSTING'});
      request.then(data=>{dispatch({type:'POSTED'})}).catch(err=>dispatch({type:'ERROR'}));
  }
}