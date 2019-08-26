import axios from 'axios'


export const FETCH_FRIENDS = "FETCH_FRIENDS"
const baseURL = 'http://localhost:5000'

export const fetchFriends = () => dispatch => {
    return axios.get(`${baseURL}/api/friends`)
    .then(res => {
        dispatch({
            type: FETCH_FRIENDS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}


// Fetch friends is a function (called in action creator) that creates an action that we will pass to our reducers 