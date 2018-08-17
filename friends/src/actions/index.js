import React from 'react';
import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ADD_FRIEND = "ADD_FRIEND";
export const ERROR = "ERROR";

export const getFriends = () => {
    const request = axios.get('/api/friends');
    return (dispatch) => {
        dispatch({type: FETCHING})
        request.then(({data}) => {
            dispatch({type: FETCHED, payload: data.friends})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err })
        })
        
    }
}

export const addFriends = () => {
    const newFriend = axios.post('/api/friends');
    return (dispatch) => {
        dispatch({type: ADD_FRIEND})
        newFriend.then(({data}) => {
            dispatch({type: ADD_FRIEND, payload: data})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err })
        })
        
    }
}