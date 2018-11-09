import axios from "axios"
export const GET_FRIENDS = "GET_FRIENDS"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

export const getFriends = () =>{
    return(dispatch) =>{
        dispatch({type : LOADING})
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                dispatch({type: GET_FRIENDS})
            })
            .catch( err => {
                dispatch({type: Error, errorMessage: "Can't get your friends :("})
            })
    }
}

