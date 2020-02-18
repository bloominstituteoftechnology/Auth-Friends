import { axiosWithAuth } from "../helpers";
export const GET_FRIENDS_START = "GET_FRIENDS_START",
    GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS",
    GET_FRIENDS_ERROR = "GET_FRIENDS_ERROR",
    SET_LOADING = "SET_LOADING",
    LOGIN_START = "LOGIN_START",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR";

export const getFriends = () => dispatch => {
    dispatch({ type: SET_LOADING });
    dispatch({ type: GET_FRIENDS_START });

    axiosWithAuth()
        .get("/friends")
        .then(response => {
            console.log(response);
            dispatch({ type: SET_LOADING });
            dispatch({ type: GET_FRIENDS_SUCCESS, payload: response });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: SET_LOADING });
            dispatch({ type: GET_FRIENDS_ERROR, payload: error });
        });
};

export const login = (userPassCombo) => dispatch => {
    dispatch({ type: SET_LOADING });
    dispatch({ type: LOGIN_START });

    axiosWithAuth()
        .post("/login", userPassCombo)
        .then(response => {
            console.log(response);
            dispatch({ type: SET_LOADING });
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload});
            
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: SET_LOADING });
            dispatch({ type: LOGIN_ERROR, payload: error });
        });
};