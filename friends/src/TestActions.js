import axios from "axios";

export const FETCHING = "FETCHING";
export const RESP_SUCCESS = "SUCCESS";
export const RESP_FAILURE = "RESP_FAILURE";

export const ADDING = "ADDING";
export const FORM = "FORM";

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
    return(axios
    .post("http://localhost:5000/api/friends",input)
    .then( response  => {
        dispatch({type:RESP_SUCCESS,payload: response.data})
        return true
    })
    .catch( error  => {
        console.log(error);
        dispatch({type:RESP_FAILURE,payload: error});
        return false
    }))
}


export const deleteFriend = (id) => (dispatch) => {
    dispatch({type:ADDING})
    axios
    .post(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
        dispatch({type:RESP_SUCCESS,payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({type:RESP_FAILURE,payload: error})
    })
}

export const changeFriend = (id,input) => (dispatch) => {
    dispatch({type:ADDING})
    axios
    .post(`http://localhost:5000/api/friends/${id}`,input)
    .then(response => {
        dispatch({type:RESP_SUCCESS,payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({type:RESP_FAILURE,payload: error})
    })
}