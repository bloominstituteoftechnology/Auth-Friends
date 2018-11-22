import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCHED, friends: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Hell to the naw" });
    });
};

export const saveFriend = (savedFriend) => dispatch => {
  dispatch({type: SAVING})
  axios.post('http://localhost:5000/api/friends', savedFriend)
    .then(res => {
      dispatch({type: SAVED, friends: res.data})
    })
    .catch(err => {
      dispatch({type: ERROR, errorMessage: 'Trouble keeping friends'})
    })
}

export const updateFriend = (updatedFriend) => dispatch => {
  dispatch({type: UPDATING })
  axios.put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
    .then(res => {
      dispatch({type: UPDATED, friends: res.data.results})
    })
    .catch(err => {
      dispatch({type: ERROR, errorMessage: 'Love them for who they are'})
    })
}
