import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const SAVING_FRIEND ='SAVING_FRIEND';
export const SAVING_FRIEND_SUCCESS = 'SAVING_FRIEND_SUCCESS';
export const SAVING_FRIEND_FAILURE = 'SAVING_FRIEND_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch ({type: FETCHING});
    axios.get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({type: FETCHING_SUCCESS, payload: response.data})
    })
    .catch(error=>{
        dispatch({type:FETCHING_FAILURE, payload: error})
    })
}
 export const saveFriend = newFriend => dispatch => {
    dispatch ({type: SAVING_FRIEND});
    axios.post('http://localhost:5000/api/friends', newFriend)
    .then(response => {
        dispatch({type: SAVING_FRIEND_SUCCESS, payload: response.data})
    })
    .catch(error =>{
        dispatch({type: SAVING_FRIEND_FAILURE, payload:error})
    })
}