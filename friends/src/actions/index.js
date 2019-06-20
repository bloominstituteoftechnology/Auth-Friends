const axios = require("axios");

//GET
export const FETCHINGFRIENDS = "FETCHINGFRIENDS";
export const GETSUCCESS = "GETSUCCESS";
export const GETFAILURE = "GETFAILURE";
//POST
export const ADDFRIENDS = "ADDFRIENDS";
export const ADDSUCCESS = "ADDSUCCESS";
export const ADDFAILURE = "ADDFAILURE";
//PUT
export const EDITFRIENDS = "EDITFRIENDS";
export const EDITSUCCESS = "EDITSUCCESS";
export const EDITFAILURE = "EDITFAILURE";
//DELETE
export const REMOVEFETCH = "REMOVEFETCH";
export const REMOVESUCCESS = "REMOVESUCCESS";
export const REMOVEFAILURE = "REMOVEFAILURE";

export const makeFriends = () => dispatch => {
  dispatch({ type: FETCHINGFRIENDS });
  axios
    .get("/friends")
    .then(res => {
      dispatch({ type: GETSUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: GETFAILURE,
        payload: res.data
      });
    });
};
export const addFriends = FRIEND => dispatch => {
  dispatch({ type: ADDFRIENDS });
  axios
    .post("/friends", {
      name: FRIEND.name,
      age: FRIEND.age,
      email: FRIEND.email
    })
    .then(res => {
      dispatch({ type: ADDSUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: ADDFAILURE,
        payload: res.data
      });
    });
};
export const editFriends = (FRIEND, id) => dispatch => {
  dispatch({ type: EDITFRIENDS });
  axios
    .put(`/friends/${FRIEND.id}`, {
      name: FRIEND.name,
      age: FRIEND.age,
      email: FRIEND.email
    })
    .then(res => {
      dispatch({ type: EDITSUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: EDITFAILURE,
        payload: res.data
      });
    });
};
export const removeFriends = id => dispatch => {
  dispatch({ type: REMOVEFETCH });
  axios
    .delete(`/friends/${id}`)
    .then(res => {
      dispatch({ type: REMOVESUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: REMOVEFAILURE,
        payload: res.data
      });
    });
};
