import axios from "axios";

export const FETCHINGFRIENDS = "FETCHINGFRIENDS";
export const FRIENDSFETCHED = "FRIENDSFETCHED";
export const ERROR = "ERROR";
export const SAVINGFRIENDS = "SAVINGFRIENDS";
export const FRIENDSSAVED = "FRIENDSSAVED";
export const UPDATINGFRIENDS = "UPDATINGFRIENDS";
export const FRIENDSUPDATED = "FRIENDSUPDATED";
export const DELETINGFRIENDS = "DELETINGFRIENDS";
export const FRIENDSDELETED = "FRIENDSDELETED";

export const friendsFetch = () => {
  return function(dispatch) {
    dispatch({ type: FETCHINGFRIENDS });

    axios
      .get("http://localhost:5000/api/friends")
      .then(function(response) {
        dispatch({ type: FRIENDSFETCHED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const friendsAdd = (friendObj) => {
  return function(dispatch) {
    dispatch({ type: SAVINGFRIENDS });
    axios
      .post("http://localhost:5000/api/friends",friendObj)
      .then(function(response) {
        dispatch({ type: FRIENDSSAVED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const friendsDelete = (friendID) => {
  return function(dispatch) {
    dispatch({ type: DELETINGFRIENDS });
    axios
      .delete(`http://localhost:5000/api/friends/${friendID}`)
      .then(function(response) {
        dispatch({ type: FRIENDSDELETED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const friendsEdit = (friendID,friendObj) => {
  return function(dispatch) {
    dispatch({ type: UPDATINGFRIENDS });
    axios
      .put(`http://localhost:5000/api/friends/${friendID}`,friendObj)
      .then(function(response) {
        console.log(response)
        dispatch({ type: FRIENDSUPDATED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};
