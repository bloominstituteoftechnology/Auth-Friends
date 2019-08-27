import axios from 'axios'

export const FETCH_FRIENDS = "FETCH_FRIENDS"
export const POST_FRIENDS = "POST_FRIENDS"
export const DELETE_FRIENDS = "DELETE_FRIENDS"
export const UPDATE_FRIENDS = "UPDATE_FRIENDS"

const baseURL = 'http://localhost:5000'

export const fetchFriends = () => dispatch => {
    return axios.get(`${baseURL}/api/friends`)
    .then(res => {
        console.log(res)
        dispatch({
            type: FETCH_FRIENDS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}


export const postFriends = (friends) => dispatch => {
    return axios.post(`${baseURL}/api/friends`, friends)
    .then(res => {
        console.log(res)
        dispatch({
            type: POST_FRIENDS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteFriends = (id) => dispatch => {
    return axios.delete(`${baseURL}/api/friends/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_FRIENDS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const updateFriends = (id, updatedName) => dispatch => {
    return axios.put(`${baseURL}/api/friends/${id}`, updatedName)
    .then(res => {
        dispatch({
            type: UPDATE_FRIENDS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

// Fetch friends is a function (called in action creator) that creates an action that we will pass to our reducers 