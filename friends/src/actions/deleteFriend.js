import axios from 'axios';

export const deleteFriend = friend => {
    const removeFriend = axios.delete('http://localhost:5000/api/friends${friends.id}'),
    { newFriend: friend.name }
);
    return function(dispatch) {
        dispatch({ type: REMOVE_FRIEND });
        getFriend
         .then(response => {
            dispatch({ type: FRIEND_REMOVED, payload: response.data});
        })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};