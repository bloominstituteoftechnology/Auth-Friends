import axios from 'axios';

export const   
    FETCHING    = 'FETCHING', 
    FETCHED     = 'FETCHED',
    ADDING      = 'ADDING',
    ADDED       = 'ADDED', 
    UPDATING    = 'UPDATING',
    UPDATED     = 'UPDATED', 
    DELETING    = 'DELETING',
    DELETED     = 'DELETED',    
    ERROR       = 'ERROR';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING});

    axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            dispatch({ type: FETCHED, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Friends Not Found' })
        });
};

export const addFriend = (newFriend) => dispatch => {
    dispatch({ type: ADDING});

    axios  
        .post(`http://localhost:5000/api/friends`, newFriend)
        .then(response => {
            dispatch({ type: ADDED, friends: response.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Friend Not Added' })
        });
};

export const updateFriend = (id) => dispatch => {
    dispatch({ type: UPDATING});
    
    axios
        .put(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: UPDATED, friends: response.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Friend Not Updated' })
        });
};

export const deleteFriend = (id) => dispatch => {
    dispatch({ type: DELETING});

    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: DELETED, friends: response.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Friend Not Deleted' })
        });
};


