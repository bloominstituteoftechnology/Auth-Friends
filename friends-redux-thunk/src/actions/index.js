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
          })
          console.log(e.message);
        });
  };
};

export const modifyFriend = (id, data) => {
    const { name, age, email } = data
    const modify = axios.put(`http://localhost:5000/api/friends/${id}`, data);
    console.log("Hellofrom modifyFriend");
    return (dispatch) => {
        
        dispatch({type: UPDATINGFRIEND});
        modify.then(response => {
            console.log("response.data",response.data);
            dispatch({
                type: FRIENDUPDATED,
                data: { id, name, age, email },
                id                
            })
        }).catch(e => {
            console.log(e)
        });
    }
}

export const deleteFriend = (id) => {
    const modify = axios.delete(`http://localhost:5000/api/friends/${id}`);
}