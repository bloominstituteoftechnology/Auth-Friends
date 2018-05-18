import axios from 'axios';

export const fetchFriends = () => {
    const getFriends = axios.get('http://http://localhost:5000/api/friends');
    return dispatch => { // return function(dispatch) here to c+p if return dispatch doesn't work
        dispatch({ type: FETCHING_FRIENDS });
        getFriends
            .then(friendData => { 
                console.log("Friend Data:",friendData)
                dispatch({
                    type: FRIENDS_FETCHED,
                })
            })
    }
}