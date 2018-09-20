import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends');
    return function(dispatch){
        dispatch({type:FETCHING_FRIENDS});
        promise
            .then(({data}) => {
                dispatch({type: FETCHED_FRIENDS, payload: data});
            })
            .catch(err=>{
                dispatch({type: ERROR, payload: err});
            })
    }
}