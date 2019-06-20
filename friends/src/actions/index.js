import { setUser, getUser, logout } from "../components/withAuth/services";
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

//LOGIN
export const LOGINFETCH = "LOGINFETCH";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAILURE = "LOGINFAILURE";

export const makeFriends = user => dispatch => {
  dispatch({ type: FETCHINGFRIENDS });
  axios
    .get("/friends", {
      headers: {
        authorization: getUser().token
      }
    })
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
    .post(
      "/friends",
      {
        name: FRIEND.name,
        age: FRIEND.age,
        email: FRIEND.email
      },
      {
        headers: {
          authorization: getUser().token
        }
      }
    )
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
    .put(
      `/friends/${FRIEND.id}`,
      {
        name: FRIEND.name,
        age: FRIEND.age,
        email: FRIEND.email
      },
      {
        headers: {
          authorization: getUser().token
        }
      }
    )
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
export const removeFriends = (id, user) => dispatch => {
  dispatch({ type: REMOVEFETCH });
  axios
    .delete(`/friends/${id}`, {
      headers: {
        authorization: getUser().token
      }
    })
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
export const login = (username, password) => dispatch => {
  dispatch({ type: LOGINFETCH });
  axios
    .post(`/login`, {
      username: username,
      password: password
    })
    .then(res => {
      setUser({ token: res.data.payload });
      dispatch({ type: LOGINSUCCESS, payload: res.data.payload });
    })
    .catch(res => {
      logout(callback => {
        alert(res);
      });
      dispatch({
        type: LOGINFAILURE,
        payload: res.data
      });
    });
};
