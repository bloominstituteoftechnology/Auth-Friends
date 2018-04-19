import axios from 'axios';

export const   
    FETCHING  = 'FETCHING', 
    FETCHED   = 'FETCHED',
    ADDING    = 'ADDING',
    ADDED     = 'ADDED', 
    UPDATING  = 'UPDATING',
    UPDATED   = 'UPDATED', 
    DELETING  = 'DELETING',
    DELETED   = 'DELETED',    
    ERROR     = 'ERROR';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING});

    axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            dispatch({ type: FETCHED, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'You Have No Friends' })
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
            dispatch({ type: ERROR, errorMessage: 'Cannot Add Friends That Do Not Exist' })
        });
};

export const updateFriend = (id, friend) => dispatch => {
    dispatch({ type: UPDATING});
    
    axios
        .put(`http://localhost:5000/api/friends/${id}`, friend )
        .then(response => {
            // console.log('responses', response.data)
            dispatch({ type: UPDATED, friends: response.data})
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'No Friends to Update' })
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
            dispatch({ type: ERROR, errorMessage: 'Really? Which Friends Can You Afford To Delete?' })
        });
};