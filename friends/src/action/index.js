import axios from "axios";
export const FRIENDSFETCHED = "FRIENDSFETCHED";
export const FETCHINGFRIENDS = "FETCHINGFRIENDS";
export const FRIENDSSAVED = "FRIENDSSAVED";
export const SAVINGFRIENDS = "SAVINGFRIENDS";
export const UPDATINGFRIEND = "UPDATINGFRIEND";
export const FRIENDUPDATED = "FRIENDUPDATED";
export const DELETINGFRIEND = "DELETINGFRIEND";
export const FRIENDDELETED = "FRIENDDELETED";

const URL = "http://localhost:5000/api/friends";

export const fetchData = () => dispatch => {
  console.log("action call");
  dispatch({ type: FETCHINGFRIENDS });
  axios
    .get(URL)
    .then(response => {
      console.log(response);
      dispatch({ type: FRIENDSFETCHED, payload: response.data });
    })
    .catch(err => ({
      err
    }));
};
