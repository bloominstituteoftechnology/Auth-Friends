import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const FETCHING_FRIENDS_ERROR = "FETCHING_FRIENDS_ERROR";
export const SAVING_FRIEND = "SAVING_FRIEND";
export const SAVED_FRIEND = "SAVED_FRIEND";
export const SAVING_FRIEND_ERROR = "SAVING_FRIEND_ERROR";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const UPDATED_FRIEND = "UPDATED_FRIEND";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const DELETED_FRIEND = "DELETED FRIEND";

export const getFriends = () => {
  return function(dispatch) {
        dispatch({type: FETCHING_FRIENDS});
        axios.get(`http://localhost:5000/api/friends`)
          .then((friends) => {
              dispatch({ type: FETCHED_FRIENDS, payload: friends});
            })
          .catch(error => {
              dispatch({type: FETCHING_FRIENDS_ERROR, payload: console.log(error)});
            })
    };
}
