import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS  = 'FETCHED_FRIENDS';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    
    const getFriends = axios.get('http://api/friends');
    return function(dispatch) {

        dispatch:{type:FETCHING_FRIENDS}

        getFriends
        .then(data => {
            console.log(data)
            dispatch({type: FETCHED_FRIENDS, payload: data})
            console.log('DATA', data)
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    } 
}
