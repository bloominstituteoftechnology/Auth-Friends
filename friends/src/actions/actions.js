import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FREINDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const SAVED_FRIENDS = 'SAVED_FRIENDS';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const UPDATED_FRIENDS = 'UPDATED_FRIENDS';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const DELETED_FRIENDS = 'DELETED_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000');
    return function(dispatch){
        dispatch({type:FETCHING_FRIENDS});
        promise
            .then(({data}) => {
                dispatch({type: FETCHED_FRIENDS, payload: data.results});
            })
            .catch(err=>{
                dispatch({type: ERROR, payload: err});
            })
    }
}