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



