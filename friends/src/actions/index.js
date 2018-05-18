import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    const getFriends = axios.get('http://http://localhost:5000/api/friends');
    return dispatch => { // return function(dispatch) here to c+p if return dispatch doesn't work
        dispatch({ type: FETCHING_FRIENDS });
        getFriends
            .then(friendData => { 
                console.log("Friend Data:", friendData)
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: friendData.data
                });
            })
            .catch(err => {
                dispatch({ type: ERROR, 
                    payload: err })
            })
    }
}