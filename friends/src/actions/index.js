import axios from 'axios';

// axios functions
const URL = 'http://localhost:5000/api/friends';
const getFriendsAPI = () => {
  return axios.get(URL);
};
// Action Types
export const ERROR = 'ERROR';
export const GET_FRIENDS = 'GET_FRIENDS';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';

export const getFriends = () => {

    const friends = getFriendsAPI();
    return dispatch => {
        dispatch({type: GETTING_FRIENDS});
        friends
            .then(response => {
                console.log(response);
                dispatch({type: GET_FRIENDS, payload:response.data});

            })
            .catch(error => {
                dispatch({type: ERROR, payload: error});
            })
    }
};

