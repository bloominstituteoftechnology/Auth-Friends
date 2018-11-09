import axios from 'axios';

export const ADD_FRIEND = "ADD_FRIEND";
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';


export const addFriendAction = (value, id) => {
    return { type: ADD_FRIEND, payload: value, index: id, }
};
export const fetchingFriendsAction = (value, id) => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        axios
            .get('http://localhost:5000')
            .then(response => {
                console.log(response);
                // dispatch({
                //     type: FRIENDS_FETCHED
                // });
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: 'Unable to load friends, Please try again.'});
            })
    }
}