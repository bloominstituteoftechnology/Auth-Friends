import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED_SUCCESS = 'FRIENDS_FETCHED_SUCCESS';
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR';

export const fetchFriends = () => {
    return dispatch => {
        dispatch ({type:FETCHING_FRIENDS});
        axios
        .get('http://localhost:5000')
        .then(response =>{
            dispatch({type:FRIENDS_FETCHED_SUCCESS, payload: response.datas});
        })
        .catch(err => {
            console.log(err);
            dispatch({type:FRIENDS_FETCH_ERROR});
        });
    };
};