import axios from 'axios';
export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';
export const DELETING = 'DELETING';
export const POSTED = 'POSTED';
export const POSTING = 'POSTING';
export const FETCHING = 'FETCHING';
export const FETCHED  = 'FETCHED';
export const ERROR = 'ERROR';


export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING });

    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: FETCHED, friends: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Fetching the data'})
        });

};

export const addFriend = (name, age, email) => dispatch => {

    dispatch({ type: POSTING });

    axios
        .post('http://localhost:5000/api/friends', {name, age, email})
        .then(response => {
            dispatch({ type: POSTED, friends: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Posting the data'})
        });

};

export const deleteFriend = (id) => dispatch => {

    dispatch({ type: DELETING });

    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: DELETED, friends: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Deleting the data'})
        });

};

export const updateFriend = (name, age, email, id) => dispatch => {
    dispatch({ type: UPDATING });

    axios
        .put(`http://localhost:5000/api/friends/${id}`, {name, age, email})
        .then(response => {
            dispatch({ type: UPDATED, friends: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Updating the data'})
        });

};

export const getFriend = (id) => dispatch => {
    dispatch({ type: GETTING });

    axios
        .get(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: GOT, friend: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Getting the data'})
        });

};
