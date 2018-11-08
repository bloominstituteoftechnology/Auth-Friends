
import axios from 'axios';


export const FETCHING_FRIENDS_LOADING = 'FETCHING_FRIENDS_LOADING';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const CREATING_FRIENDS_LOADING = 'CREATING_FRIENDS_LOADING';
export const CREATING_FRIENDS_FAILURE = 'CREATING_FRIENDS_FAILURE';
export const CREATING_FRIENDS_SUCCESS = 'CREATING_FRIENDS_SUCCESS';

export const fetchFriends = () => dispatch =>{
    dispatch({type:FETCHING_FRIENDS_LOADING})
      axios
        .get('http://localhost:5000/api/friends') 
            .then(response =>{
                dispatch({
                    type:FETCHING_FRIENDS_SUCCESS,
                    payload : response.data 
                })
            }) 
        .catch(err =>{
            dispatch({type: FETCHING_FRIENDS_FAILURE, payload : 'Sorry bud, no data to be found'})
        })    
}

export const createFriend = (friendData) => dispatch =>{
    dispatch({type:CREATING_FRIENDS_LOADING})
     axios
        .post('http://localhost:5000/api/friends', friendData)
            .then(response =>{
                dispatch({
                    type:CREATING_FRIENDS_SUCCESS, payload :response.data  
                })
            })
            .catch(err =>{
                dispatch({type: CREATING_FRIENDS_FAILURE, payload : err })
            })    
}
