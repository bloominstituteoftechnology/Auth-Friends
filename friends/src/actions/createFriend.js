import axios from 'axios';

export const createFriend = friend => {
    const addFriend = axios.put('http://localhost:5000/api/friends${friends.id}'),
    { newFriend: friend.name }
);
    return function(dispatch) {
        dispatch({ type: ADD_FRIEND });
        getFriend
         .then(response => {
            dispatch({ type: FRIEND_UPDATED, payload: response.data});
        })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};