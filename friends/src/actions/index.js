import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_A_FRIEND = 'GET_A_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
    return {type: GET_FRIENDS, payload: ''}
}

export const getFriend = () => {
    return {type: GET_A_FRIEND, payload: ''}
}

export const addFriend = () => {
    return {type: ADD_FRIEND, payload: ''}
}

export const updateFriend = () => {
    return {type: UPDATE_FRIEND, payload: ''}
}

export const deleteFriend = () => {
    return {type: DELETE_FRIEND, payload: ''}
}
