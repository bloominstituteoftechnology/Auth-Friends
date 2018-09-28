import axios from 'axios';

export const ADDING_FRIENDS = 'ADDING_FRIENDS';
export const NEW_FRIEND_ADDED = 'NEW_FRIEND_ADDED';
export const ERROR_ADDING_FRIEND = 'ERROR_ADDING_FRIEND';

export const EXFRIEND = 'EXFRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const GRABBING_FRIENDS = 'GRABBING_FRIENDS';
export const FRIENDS_GRABBED = 'FRIENDS_GRABBED';
export const ERROR = 'ERROR';

export const grabbingFriends = () => dispatch => {
    dispatch({ type: GRABBING_FRIENDS });
    const promise = axios.get('/api/friends');
    promise
        .then(response => {
            dispatch({ type: FRIEND_GRABBED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};
export const addingFriends = friend => dispatch => {
    dispatch({ type: ADDING_FRIENDS });
    axios.post('/api.friends', friend)
    .then(repsonse => {
        dispatch({ type: NEW_FRIEND_ADDED, payload: response.data });
    }).catch(error => {
        dispatch({ type: ERROR_ADDING_FRIEND, payload: error });
    });
}

// export const exFriend = friendId => {
//     return {
//         type: EXFRIEND, payload: friendId
//     };
// };

// export const removeFriend = () => {
//     return {
//         type: REMOVE_FRIEND
//     };
// };