
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const SET_CURRENT = "SET_CURRENT";
export const CLEAR_CURRENT = "CLEAR_CURRENT";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const CLEAR_ALERT = "CLEAR_ALERT";


// action creator



export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_START });

  axiosWithAuth()
    .get("/friends")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
      console.log("get data", res);
    })
    .catch(err => {
      console.log("get error", err.response.data.Error);
      dispatch({ type: FETCH_FAILURE, payload: err.response.data.msg });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: FETCH_START });

  axiosWithAuth()
    .post("/friends", friend)
    .then(res => {
      console.log("post res", res);
      dispatch({ type: ADD_FRIEND, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response.data.msg });
    });
};

export const updateFriend = friend => dispatch => {
  dispatch({ type: FETCH_START });
  console.log('friend', friend);

  axiosWithAuth()
    .put(`/friends/${friend.id}`, friend)
    .then(res => {
      console.log("update-res", res);
      dispatch({ type: UPDATE_FRIEND, payload: res.data });
    })
    .catch(err => {
        console.log('update-err', err.response);
      dispatch({ type: FETCH_FAILURE, payload: err.response.data.msg });
    });
};

export const deleteFriend = friend => dispatch => {
  dispatch({ type: FETCH_START });

  axiosWithAuth()
    .delete(`friends/${friend.id}`, friend)
    .then(res => {
     
      dispatch({ type: DELETE_FRIEND, payload: res.data });
     
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response.data.msg });
    });
};

export const setCurrent = smurf => {
  return { type: SET_CURRENT, payload: smurf };
};

export const clearCurrent = () => {
  return { type: CLEAR_CURRENT };
};

export const clearAlert = () => {
  return { type: CLEAR_ALERT };
};

export const setAlert = (err) => {
    return { type: FETCH_FAILURE, payload: err};
}
