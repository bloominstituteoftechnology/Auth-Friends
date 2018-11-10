import axios from 'axios'

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"

//GET
export const getFriends = () => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios.get(`http://localhost:5000/api/friends`)
            .then(response => {
                dispatch({ type: SUCCESS, friends: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: "Trouble Getting Friends"})
            })
    }
}

//POST
export const createFriend = friend => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios
        .post(`http://localhost:5000/api/friends`, friend )
        .then(response => {
            dispatch({ type: SUCCESS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble Creating Friends"})
        })
    }
}

//DELETE
export const deleteFriend = id => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: SUCCESS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble Deleting Friend "})
        })
    }
}

//PUT
export const updateFriend = updatedFriend => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios
        .put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
        .then(response => {
            dispatch({ type: SUCCESS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble Updating Friend "})
        })
    }
}

