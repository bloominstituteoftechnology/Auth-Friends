import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

// const initialState = {
//     fetchingFriends: false,  Getting Friends
//     friendsFetched: false,
//     savingFriends: false,    Adding Friends
//     friendsSaved: false,
//     updatingFriend: false,   Updating Friends
//     friendUpdated: false,
//     deletingFriend: false,   Deleting Friends
//     friendDeleted: false,
//     friends: [],
// }

export const getFriends = () => {
    console.log("Get Friends is working")
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
      dispatch({ type: FETCHING_FRIENDS });
      friends
        .then(response => {
            console.log("Is this firing? response is ", response)
          dispatch({ type: FRIENDS_FETCHED, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
        });
    };
};
