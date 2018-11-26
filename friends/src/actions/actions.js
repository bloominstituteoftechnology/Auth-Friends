import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR'

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios
            .get(`http://localhost:5000/api/friends`)
            .then(response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: "We had some trouble finding your friends."})
            });
    }
}

export const addFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: "We had some trouble adding your friend."})
            });
    }
}

export const deleteFriend = (id) => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: "We had some trouble removing your friend."})
            });
        
    }
}

export const updateFriend = (id, updatedFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios
            .put(`http://localhost:5000/api/friends/${id}`, updatedFriend)
            .then(response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: "We had some trouble updating your friend's info."})
            });
    }
}