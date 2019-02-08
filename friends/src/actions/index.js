import axios from 'axios'

export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"
export const ADDING_FRIENDS = "ADDING_FRIENDS"
export const ADDING_SUCCESS = "ADDING_SUCCESS"
export const DELETING_FRIENDS = "DELETING_FRIENDS"
export const DELETING_SUCCESS = "DELETING_SUCCESS"


export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS })
    axios.get(`http://localhost:5000/api/friends`)
    .then(response => {
        console.log(response.data)
        dispatch({ type: FETCHING_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({ type: FETCHING_FAILURE, payload: error})
    })
}

export const addFriends = (newFriend) => dispatch => {
    dispatch( { type: ADDING_FRIENDS })
    axios.post(`http://localhost:5000/api/friends`, newFriend)
    .then(response => {
        dispatch({ type: ADDING_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
    })
}

export const deleteFriends = (id) => dispatch => {
    dispatch({ type: DELETING_FRIENDS })
    axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
        dispatch({ type: DELETING_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({ type: FETCHING_FAILURE, payload: error})
    })
}

export const updateFriends = (newFriend) => dispatch => {
    axios.put(`http://localhost:5000/api/friends`, newFriend)
    .then(response => {
        dispatch({ type: ADDING_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
    })
}