import axios from "axios";

// Actions
export const LOADING = "LOADING";
export const LOAD_FRIENDS = "LOAD_FRIENDS";
export const ERROR = 'ERROR';

export const loadFriends = () => {
    return(dispatch) => {
        dispatch({type: LOADING});
        axios
            .get("http://localhost:5000/api/friends")
            .then(response => {
                dispatch({type: LOAD_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMsg: "Unable to load friends.."})
            });
    }
}