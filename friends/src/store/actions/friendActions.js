import axios from "axios";
import { FETCHING_FRIENDS, FRIENDS_FETCHED, FRIENDS_SAVED, SAVING_FRIENDS, ERROR } from './types'

export const fetchStuff = () => {
    const url = "http://localhost:5000/api/friends";
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
                dispatch({ type: ERROR })
            });
            
    };
};