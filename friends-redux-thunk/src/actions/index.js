import axios from "axios";
/** FETCH FRINEDS */
export const FETCHINGFRIENDS = "FETCHINGFRIENDS";
export const FRIENDSFETCHED = "FRIENDSFETCHED";
/** ADD NEW FRIEND */
export const FRIENDSSAVED = "FRIENDSSAVED";
export const SAVINGFRIENDS = "SAVINGFRIENDS";
/** UPDATE FRINED */
export const UPDATINGFRIEND = "UPDATINGFRIEND";
export const FRIENDUPDATED = "FRIENDUPDATED";
/** DELETE FRIEND */
export const DELETINGFRIEND = "DELETINGFRIEND";
export const FRIENDDELETED = "FRIENDDELETED";

export const ERROR = "ERROR";

export const getFriends = () => {
  const fetchFriends = axios.get("http://localhost:5000/api/friends");
  return function(dispatch) {
    dispatch({ type: FETCHINGFRIENDS });
    fetchFriends
      .then(response => {
          dispatch({
              type: FRIENDSFETCHED,
              friends: response.data
          })
          console.log("GET",response.data)})
      .catch(e => console.log(e));
  };
};
