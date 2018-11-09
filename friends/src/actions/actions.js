import axios from 'axios';

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const fetchFriends = () =>{
    return dispatch=>{
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/api/friends')
            .then(response =>{
                dispatch({ type:SUCCESS, payload: response.data })
            })
            .catch(err =>{
                dispatch({ type: FAILURE, payload: "cannot reach friends data"})
            })
    }
}