import React from 'react';
import axios from 'axios';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDED_FRIEND = 'ADDED_FRIEND';
export const ADD_ERROR = 'ADD_ERROR';

export const addFriend = () => {
    return dispatch => {
        dispatch({ type: ADDING_FRIEND });
        axios
        .post('http://localhost:5000/api/friends')
        
    }
}