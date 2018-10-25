import axios from 'axios'


export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'


export const fetchFriends = () => dispatch =>{
    dispatch({type: FETCHING_FRIENDS});
    axios.get('http://localhost:5000/api/friends')
    .then(({data}) => {
        dispatch({
            type: SUCCESS,
            payload: data
        })
    })
    .catch(err => {
        dispatch({
            type: FAILURE,
            payload: err
        })
    })
}