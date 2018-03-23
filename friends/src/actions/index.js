import axios from 'axios';
export const IS_FETCHING = "IS_FETCHING";

export const 
    FRIENDS_FETCHED = "FRIENDS_FETCHED",
    ERROR_FETCHING_FRIENDS = "ERROR_FETCHING_FRIENDS";
    
export const 
    IS_SAVING = "IS_SAVING",
    FRIENDS_SAVED = "FRIENDS_SAVED",
    ERROR_SAVING_FRIENDS = "ERROR_SAVING_FRIENDS";

export const 
    IS_UPDATING = "UPDATED",
    FRIENDS_UPDATED = "FRIENDS_UPDATED",
    ERROR_UPDATING_FRIENDS = "ERROR_UPDATING_FRIENDS";

   
    

export const getFriends = () => (dispatch) => {
    dispatch({ type: IS_FETCHING });

    axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => { 
            dispatch({ type: FRIENDS_FETCHED, friends: response.data })
        })
        .catch(error => {
            dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
        });
};

export const saveFriend = (friend) => (dispatch) => {
    dispatch({ type: IS_SAVING });

    axios
        .post(`http://localhost:5000/api/friends`, friend)
        .then(response => {
            dispatch({ type: FRIENDS_SAVED, friends: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR_SAVING_FRIENDS, payload: error });
        });
};

export const updateFriend = (friend, id) => dispatch => {
    dispatch({ type: IS_UPDATING });

    axios 
        .put(`http://localhost:5000/api/friends/${id}`, friend)
        .then(response => {
            dispatch({ type: FRIENDS_UPDATED, friends: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR_UPDATING_FRIENDS, payload: error });
        });
};
