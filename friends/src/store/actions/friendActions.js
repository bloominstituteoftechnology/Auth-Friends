import axios from "axios";
import { FETCHING_FRIENDS, FRIENDS_FETCHED, FRIENDS_SAVED, SAVING_FRIENDS, ERROR } from './types'

const url = "http://localhost:5000/api/friends";

export const fetchStuff = () => {
    const promise = axios.get(url);
    return(dispatch) => {
        dispatch({ type: FETCHING_FRIENDS })
        promise
            .then(response => {
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: response.data
                 })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR, payload: err  })
            });
            
    };
};

export const addFriend = friend => {
    const promise = axios.post(url, friend);
    return(dispatch) => {
        dispatch({ type: SAVING_FRIENDS })
        promise
            .then(response => {
                dispatch({
                    type: FRIENDS_SAVED,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR, payload: err })
            });
    };
};