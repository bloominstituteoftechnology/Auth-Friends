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
let nextID = 42;
export const addFriend = input => {
    const add = axios.post(`http://localhost:5000/api/friends/`, input)
    return function(dispatch) {
        dispatch({ type: ADDING_FRIEND })
        add
            .then(res => {
                dispatch({
                    type: ADD_FRIEND,
                    payload: {
                        id: nextID++,
                        name: input,
                        email: null,
                        age: null,
                    }
                })
         this.fetchFriends()
        })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}