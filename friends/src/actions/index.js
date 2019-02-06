import axios from 'axios'

export const FETCHING_FRIENDS = "FETCHING_FRIENDS"

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS })
    console.log(dispatch)
    axios.get('http://localhost:5000/friends')
    .then(response => {
        console.log(response)
    })
}