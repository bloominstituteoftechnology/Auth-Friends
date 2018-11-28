import axios from 'axios';
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";




export const fetch = () => {
    return (dispatch) =>{
        dispatch({ type: FETCHING})
        axios.get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({type: SUCCESS, friends: response.data});
        })
        .catch(err=>{
            dispatch({ type: FAILURE, error: 'Oh No!'})
        });
    }
}

export const addFriend = (friendadded) =>{
    return dispatch => {
        dispatch({type: FETCHING});
        axios
        .post('http://localhost:5000/api/friends', friendadded)
        .then(response => {
            dispatch({
                type: SUCCESS,
                friends: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: FAILURE,
                payload: 'Not able to add new friend'
            })
        })
    }
}