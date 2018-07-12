import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";


export const fetchingFriendsAction = () => {
        const request = axios.get('http://localhost:5000/api/friends/');

        return (dispatch) => {
        dispatch({type: FETCHING});

        request.then(response => {
        dispatch({type: FETCHED, friends: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};

