import axios from "axios";
export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ADD_FRIEND = "ADD_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const FRIEND_REMOVED = 'FRIEND_REMOVED';
export const ERROR = "ERROR";

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({ type: FETCH_FRIENDS });
        getFriends/*error not defined*/
         .then(someData => {
            dispatch({ type: FRIENDS_FETCHED, payload: someData});
        })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};




export const createFriend = friend => {
    const addFriend = axios.post(`http://localhost:5000/api/friends${friends/*error not defined*/.id}`,
    { newFriend: friend.name }
);
    return function(dispatch) {
        dispatch({ type: ADD_FRIEND });
        getFriend /*error not defined*/
         .then(response => {
            dispatch({ type: FRIEND_UPDATED, payload: response.data});
        })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};



export const deleteFriend = friend => {
    const removeFriend = axios.delete(`http://localhost:5000/api/friends${friends/*error not defined*/.id}`,
    { newFriend: friend.name }
);
    return function(dispatch) {
        dispatch({ type: REMOVE_FRIEND });
        getFriend/*error not defined*/
         .then(response => {
            dispatch({ type: FRIEND_REMOVED, payload: response.data});
        })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};