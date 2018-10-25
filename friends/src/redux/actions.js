
//-- Dependencies --------------------------------
import axios from 'axios';

//-- Configuration -------------------------------
const REMOTE_SERVER = 'http://localhost:5000';
function remote(path) {
    return `${REMOTE_SERVER}/${path}`;
}

//-- Action Types --------------------------------
export const GET_FRIENDS = 'GET_FRIENDS';
export const FRIENDS_RESPONSE = 'FRIENDS_RESPONSE';
export const FETCHING = 'FETCHING';
export const FETCH_ERROR = 'ERROR';
export const NOT_READY = 'NOT_READY';


//== Action Generators =========================================================

//-- GET_FRIENDS - Agent requests list of all friends
export function getFriends() {
    return function (dispatch) {
        dispatch({type: FETCHING});
        // Fail half the time, so as to show error
        let fetchPath = (Math.random() > 0.5)? 'api/friends' : 'gibberish';
        axios.get(remote(fetchPath))
        .then(response => {
            dispatch(friendsResponse(response.data));
        })
        .catch(error => {
            let errorMessage = `Error requesting data: ${error.response.status}`;
            dispatch(fetchError(errorMessage));
        });
    };
};

//-- FRIENDS_RESPONSE - Server replied with list of all friends
export function friendsResponse(friendsData) {
    return {
        type: FRIENDS_RESPONSE,
        friends: friendsData,
    };
};

//-- ADD_FRIEND - Agent submits a new friend
export function addFriend(friendData) {
    return function (dispatch) {
        dispatch({type: FETCHING});
        axios.post(remote('api/friends'), friendData)
        .then(response => {
            dispatch(friendsResponse(response.data));
        })
        .catch(error => {
            let errorMessage = `Error submitting data: ${error.response.status}`;
            dispatch(fetchError(errorMessage));
        });
    }
}

//-- FETCH_ERROR - Server returned with error state
export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error: error
    };
}

//-- NOT_READY - User attempted an action while agent wasn't ready
export function notReady(error) {
    return {
        type: NOT_READY,
        error: error,
    };
}