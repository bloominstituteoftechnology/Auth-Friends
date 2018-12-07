import axios from "axios";

export const FETCHING = "FETCHING";
export const RESP_SUCCESS = "SUCCESS";
export const RESP_FAILURE = "RESP_FAILURE";


export const ADD = "ADD";
export const ADDING = "ADDING"




export const fetchFriends = () => dispatch => {
    dispatch({type:FETCHING})
    axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
        dispatch({type:RESP_SUCCESS,payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({type:RESP_FAILURE,payload: error})
    })
}

export const updateFriendList = (input) => (dispatch) => {
    dispatch({type:ADDING})
    axios
    .post("http://localhost:5000/api/friends",input)
    .then(response => {
        dispatch({type:RESP_SUCCESS,payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({type:RESP_FAILURE,payload: error})
    })
}

// export const updateFriendList = (input)  => {
//     return({type:ADD,payload:input})
// }