import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_A_FRIEND = 'GET_A_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const ERROR = 'ERROR';

export const getFriends = () => {
    const request = axios.get(`http://localhost:5000/api/friends`)

    return (dispatch) => {
        request.then((response) => {
            console.log(response);
            dispatch({
                type: GET_FRIENDS,
                payload: response.data
            })
        })
        request.catch((error) => {
            dispatch ({
                type: ERROR,
                payload: error
            })
        })
        // {type: GET_FRIENDS, payload: ''}
    }
}

export const getFriend = () => {
    return {
        // type: GET_A_FRIEND, payload: ''
    }
}

export const addFriend = (friend) => {
    const request = axios.post(`http://localhost:5000/api/friends`, friend)

    return (dispatch) => {
        request.then(response => {
            setTimeout(() => {
                dispatch(getFriends());
            }, 1000)
        })
        .catch(err => {
            dispatch({ type: "ERROR", error: "ERROR in ADDING FRIEND" });
        })
    }
}

export const updateFriend = () => {
    return {
        // type: UPDATE_FRIEND, payload: ''
    }
}

export const deleteFriend = () => {
    return {
        // type: DELETE_FRIEND, payload: ''
    }
}
