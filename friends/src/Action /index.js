import axios from 'axios'; 

export const ERROR ="ERROR"; 
export const GETTING_FRIENDS="GETTING_FRIENDS"; 
export const GET_FRIENDS="GET_FRIENDS"; 
export const UPDATING_FRIENDS="UPDATING_FRIENDS"; 
export const UPDATED_FRIENDS="UPDATED_FRIENDS";
export const CREATING_FRIENDS="CREATING_FRIENDS"; 
export const CREATED_FRIENDS="CREATED_FRIENDS"; 
export const DELETING_FRIENDS="DELETING_FRIENDS"; 
export const DELETED_FRIENDS="DELETED_FRIENDS"; 
export const SINGLE_FRIEND="SINGLE_FRIEND"; 
export const TOGGLE_FRIEND="TOGGLE_FRIEND"; 

const URL = "http://localhost:5000"

export const getFriends = () =>{
    const friends = axios.get(`${URL}/get`); 
    return dispatch => {
        dispatch({ type: GETTING_FRIENDS}); 
        friends
        .then(response =>{
            dispatch({type: GET_FRIENDS, payload: response.data});
        })
        .catch(err =>{
            dispatch({type: ERROR, payload: err}); 
        })
    };
};

export const createFriends = friend =>{
    const newFriend = axios.post(`${URL}/create`, friend); 
    return dispatch => {
        dispatch({ type: CREATING_FRIENDS}); 
        newFriend
        .then(data =>{
            dispatch({ type: CREATED_FRIENDS, payload: data}); 
        })
        .catch(err =>{
            dispatch({type: ERROR, payload: err}); 
        })
    };
}; 

export const deleteFriends = id =>{
    const deletedFriend = axios.delete(`${URL}/delete`, {
        data: {id}
    });
    return dispatch => {
        dispatch({type: DELETING_FRIENDS}); 
        deletedFriend
        .then(({data})=>{
            dispatch({ type: DELETED_FRIENDS, payload: data}); 
            dispatch({ type: SINGLE_FRIEND, payload: {} });
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err}); 
        })
    };
};

export const toggleShowUpdate = () => {
    return{
        type: TOGGLE_FRIEND
    };
}; 

export const updateSingleFriend = friend => {
    return {
        type: SINGLE_FRIEND, 
        payload: friend 
    }; 
};
