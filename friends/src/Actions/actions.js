// we'll need axios
import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const SAVING_FRIENDS = "SAVING_FRIENDS";
export const FRIENDS_SAVED = "FRIENDS_SAVED";

export const ERROR = "ERROR";
export const fetchFriend = () => {
    const promise = axios.get(`http://localhost:5000/api/friends`);
    return dispatch => {
      // res.json();
      
      dispatch({ type: FETCHING_FRIENDS }); // first state of 'fetching' is dispatched !!!<<< fetchingFriends >>>!!!
      promise
        .then(response => {
          console.log('FETCH RESPONSE:',response);
          dispatch({ type: FRIENDS_FETCHED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
  export const deleteFriend = (friendID) => { //DELETING_FRIEND FRIEND_DELETED 
    const promise = axios.delete(`http://localhost:5000/api/friends/${friendID}`);
    return dispatch => {
      // res.json();
      
      dispatch({ type: DELETING_FRIEND }); // first state of 'fetching' is dispatched !!!<<< friendDeleted >>>!!!
      promise
        .then(response => {
          console.log('DELETE RESPONSE:',response);
          dispatch({ type: FRIEND_DELETED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
  export const updateFriend = (friendID, dataObject) => { //UPDATING_FRIEND FRIEND_UPDATED
    // const friend = { name: this.state.Name, email: this.state.Email, age: this.state.Age };
    console.log('UPDATING, PUT, UPDATING UPDATING, ID & DATA:',friendID,dataObject);
    const promise = axios.put(`http://localhost:5000/api/friends/${friendID}`, dataObject);
    return dispatch => {
      // res.json();
      
      dispatch({ type: UPDATING_FRIEND }); // first state of 'fetching' is dispatched !!!<<< friendUpdated >>>!!!
      promise
        .then(response => {
          console.log('UPDATE RESPONSE:',response);
          //dispatch(fetchFriend());
          
         dispatch({ type: FRIEND_UPDATED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
  export const saveFriend = (dataObject) => { 
    const promise = axios.post(`http://localhost:5000/api/friends`, dataObject);
    return dispatch => {
      // res.json();
      
      dispatch({ type: SAVING_FRIENDS }); // first state of 'fetching' is dispatched !!!<<< savingFriends >>>!!!
      promise
        .then(response => {
         // dispatch(fetchFriend());
          
          console.log('SAVED RESPONSE:',response);
        dispatch({ type: FRIENDS_SAVED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };

