import axios from 'axios';

export LOADING = "LOADING"
export SUCCSESS = "SUCCSESS"
export FAILURE = "FAILURE"

export const fetchFriends = () =>{
    return dispatch=>{
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000')
            .then(response =>{
                dispatch({ type:SUCESS, payload: response.data })
            })
            .catch(err =>{
                dispatch({ type: FAILURE, payload: "cannot reach friends data"})
            })
    }
}