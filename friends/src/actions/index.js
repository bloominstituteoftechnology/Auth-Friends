import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    console.log("here!")
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return dispatch => { 
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
                console.log(err)
                dispatch({ 
                    type: ERROR, 
                    payload: err })
            })
    }
}