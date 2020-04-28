import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_ADDING = "START_ADDING";
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const FRIEND_FAIL = 'FRIEND_FAIL';


// export const FRIEND_PUT = 'FRIEND_PUT';
// export const FRIEND_DELETE = 'FRIEND_DELETE';



export const fetchFriend = () => (dispatch) => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .get("/friends")
    .then((res) => 
    dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
    })
    
    )
    .catch((err) => dispatch({
        type: FETCH_FAILURE,
        payload: err.response
    })
    );
}

export const addFriend = (friend) => (dispatch) => {
    dispatch({type: START_ADDING})
    axiosWithAuth()
    .post('/friends', friend)
    .then((res) => {
        dispatch({
            type: FRIEND_ADDED,
            payload: res.data
        });
    })
    .catch((error) => {
        dispatch({ 
            type: FRIEND_FAIL,
            payload: error.response
        })
    })
};

// export const putFriend = (friend) => (dispatch) => {
//     dispatch({type: START_ADDING})
//     axiosWithAuth()
//     .put('/friends/:id', friend)
//     .then((res) => {
//         dispatch({
//             type: FRIEND_PUT,
//             payload: res.data
//         });
//     })
//     .catch((error) => {
//         dispatch({ 
//             type: FRIEND_FAIL,
//             payload: error.response
//         })
//     })
// };

// export const DeleteFriend = (friend) => (dispatch) => {
//     dispatch({type: START_ADDING})
//     axiosWithAuth()
//     .delete('/api/friends/:id', friend)
//     .then((res) => {
//         dispatch({
//             type:  FRIEND_DELETE,
//             payload: res.data
//         });
//     })
//     .catch((error) => {
//         dispatch({ 
//             type: FRIEND_FAIL,
//             payload: error.response
//         })
//     })
// };