import axios from 'axios';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const GETTING_FRIENDS_SUCCESS = 'GETTING_FRIENDS_SUCCESS';
export const GETTING_FRIENDS_FAIL = 'GETTING_FRIENDS_FAIL';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';


export const getFriends = () => dispatch => {
    dispatch({ type: GETTING_FRIENDS });

    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log('THIS IS RESPONSE', response);
            dispatch({ type: GETTING_FRIENDS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: GETTING_FRIENDS_FAIL, payload: error });
        });

};


export const addFriend = (friend) => dispatch => {
    dispatch({ type: ADDING_FRIEND });

    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(response => {
            console.log('POST RESPONSE', response);
            dispatch({ type: ADD_FRIEND, payload: response.data });
        })
        .catch(error => {
            console.log(error);
        });

}
