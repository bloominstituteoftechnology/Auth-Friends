import axios from 'axios';
export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const ADD_FRIEND = "ADD_FRIEND"
export const ADDING_FRIEND = "ADDING_FRIEND"
export const UPDATING_FRIEND = "UPDATING FRIEND"
export const FRIEND_UPDATED = "FRIEND_UPDATED"
export const DELETING_FRIEND = "DELETING_FRIEND"
export const FRIEND_DELETED = "FREIND_DELETED"
export const ERROR = "ERROR"

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({ type: FETCHING_FRIENDS })
        getFriends
            .then(res => {
                console.log('Res', res)
                dispatch({ 
                    type: FETCH_FRIENDS,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({ 
                    type: ERROR, 
                    payload: error
                })
            })
    }
}
export const addFriend = () => {
    const add = axios.post('http://localhost:5000/api/friends', newFriend);
    return function(dispatch) {
        dispatch({ type: ADDING_FRIEND })
        add
            .then(res => {
                dispatch({
                    type: ADD_FRIEND,
                    payload: {
                        name: res.data.name,
                        id: res.data.id,
                        age: res.data.age,
                        email: res.data.email
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}