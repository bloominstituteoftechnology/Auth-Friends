import axios from 'axios';

export const UPDATING_FRIEND = "UPDATING_FRIEND"
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';


// export const addFriendAction = (value, id) => {
//     return { type: ADD_FRIEND, payload: value, index: id, }
// };
export const fetchingFriendsAction = () => {
    return dispatch => {
        dispatch({ 
            type: FETCHING_FRIENDS 
        });
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
                // console.log(response);
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({ 
                    type: ERROR, 
                    payload: 'Unable to load friends, Please try again.'
                });
            })
    }
}
export const addingFriendAction = (nameValue, ageValue, emailValue) => {
    return dispatch => {
        dispatch({ type: ADDING_FRIEND });
        axios
            .post('http://localhost:5000/api/friends', {
                name: nameValue,
                age: ageValue,
                email: emailValue,
            })
            .then(response => {
                // console.log(response);
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'Unable to add new friend. Please try again.'
                })
            })
    }
}
export const updatingFriendAction = (nameValue, ageValue, emailValue, idValue) => {
    return dispatch => {
        dispatch({ type: UPDATING_FRIEND });
        axios
            .put(`http://localhost:5000/api/friends/${idValue}`, {
                id: idValue,
                name: nameValue,
                age: ageValue,
                email: emailValue,
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'Unable to update your friend. Please try again.'
                })
            })
    }
}