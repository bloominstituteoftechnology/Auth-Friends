import axios from 'axios';
import { FETCHED_FRIENDS, FETCHING_FRIENDS, SAVED_FRIENDS, SAVING_FRIENDS, ERROR } from './types.js';

const URL = `http://localhost:5000/api/friends`;
export const fetchFriends = () => {
    const promise = axios.get(URL);
    return (dispatch) => {
        dispatch({type: FETCHING_FRIENDS});
        promise
            .then((res) => {
                console.log(res.data);
                dispatch({ type: FETCHED_FRIENDS, payload: res.data});
            })
            .catch((err)=>{
                console.log(err);
                dispatch({type: ERROR})
            })
    }
}

export const saveFriends = (friends) => {
    const promise = axios.post(URL + `${friends}`);
    return (dispatch) => {
        dispatch({ type: SAVING_FRIENDS });
        promise
            .then((res)=>{
                dispatch({ type: SAVED_FRIENDS, payload: res.data })
            })
            .catch((err)=>{
                dispatch({type: ERROR})
            })
    }
}