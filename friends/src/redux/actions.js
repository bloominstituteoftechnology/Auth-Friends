
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


//== Action Generators =========================================================

//-- GET_FRIENDS - Agent requests list of all friends
export function getFriends() {
    return function (dispatch) {
        //dispatch({type: })
        axios.get(remote('api/friends'))
        .then(response => {
            dispatch(friendsResponse(response.data));
        })
        .catch(error => {
            console.log(error)
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

//-- ADD FRIEND - Agent submits a new friend
export function addFriend(friendData) {
    return function (dispatch) {
        //dispatch({type: })
        axios.post(remote('api/friends'), friendData)
        .then(response => {
            dispatch(friendsResponse(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}