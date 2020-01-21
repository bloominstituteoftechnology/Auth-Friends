import { axiosWithAuth } from "../components/AxiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
export const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/login", creds)
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(error => console.log(error.response));
};

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA_START });
  axiosWithAuth()
    .get("/friends")
    .then(response => {
      dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: GET_DATA_FAILURE, payload: error.response.error });
    });
};

export const addNewFriend = newFriend => {
  console.log("action", newFriend);
  return {
    type: ADD_NEW_FRIEND,
    payload: newFriend
  };
};