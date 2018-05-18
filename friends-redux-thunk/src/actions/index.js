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
        });
        // console.log("GET", response.data);
      })
      .catch(e => {
        dispatch({
          type: ERROR,
          error: e.message
        });
        console.log(e.message);
      });
  };
};

export const modifyFriend = (index, data) => {
  const { name, age, email, id } = data;
  console.log(data);
  const modify = axios.put(
    `http://localhost:5000/api/friends/${data.id}`,
    data
  );
  console.log("Hellofrom modifyFriend");
  return dispatch => {
    dispatch({ type: UPDATINGFRIEND });
    modify
      .then(response => {
        // console.log("response.data", response.data);
        dispatch({
          type: FRIENDUPDATED,
          data: { id, name, age, email },
          index
        });
      })
      .catch(e => {
        console.log(e);
        dispatch({
            type: ERROR,
            error: e.message
          });
      });
  };
};

export const deleteFriend = (index, id) => {
    console.log("Hello from deleteFriend",index,id);
  const deleteFriend = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return dispatch => {
    dispatch({type: DELETINGFRIEND});
    deleteFriend
      .then(response => {
        console.log("response.data".response);
        dispatch({
            type: FRIENDDELETED,
            index
        })
      })
      .catch(e => {
        console.log("error deleting",e.message);
        dispatch({
            type: ERROR,
            error: e.message
          });
      });
  };
};
