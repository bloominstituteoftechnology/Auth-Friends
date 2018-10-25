import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';

export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';

export const ADDING_FRIEND = 'FETCHING_FRIENDS';

export const ADD_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';

export const UPDATING_FRIEND = 'UPDATING_FRIEND';

export const UPDATE_FRIEND_SUCCESS = 'UPDATATING_FRIEND_SUCCESS';

export const DELETING_FRIEND = 'DELETE_FRIEND';

export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';

export const ERROR = 'ERROR';

export const fetchFriends = () => dispatch => {

    dispatch({type: FETCHING_FRIENDS});
    axios.get('http://localhost:5000/api/friends')
         .then(res =>{ console.log(res);
            dispatch({type: FETCH_FRIEND_SUCCESS, payload: res.data})})
         .catch(err => dispatch({type: ERROR, payload: err}));


}
export const addFriend = () => dispatch => {

    dispatch({type: ADDING_FRIEND});
    axios.post('/api/friends')
         .then(res => 
            dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data}))
         .catch(err => dispatch({type: ERROR, payload: err}));
    
}

export const updateFriend = (id) => dispatch => {
    dispatch({type: UPDATING_FRIEND});
    axios.put(`/api/friends/${id}`)
         .then(res => 
            dispatch({type: UPDATE_FRIEND_SUCCESS, payload: res.data}))
         .catch(err => dispatch({type: ERROR, payload: err}));

    
}

export const deleteFriend = (id) => dispatch => {
    dispatch({type: UPDATING_FRIEND});
    axios.delete(`/api/friends/${id}`)
         .then(res => 
            dispatch({type: UPDATE_FRIEND_SUCCESS, payload: res.data}))
         .catch(err => dispatch({type: ERROR, payload: err}));

}