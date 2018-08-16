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
