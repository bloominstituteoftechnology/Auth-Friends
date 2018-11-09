import axios from "axios"
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const GET_FRIENDS = 'GET_FRIENDS'

export const fetchFriends = () => dispatch => {
    dispatch({type: LOADING})
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
        console.log(response.friends)
    }
    )
    .catch(err =>{dispatch({type:ERROR, errorMessage: "Can't Find Friends"})})
}