import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

// GET
export const getFriends = () => {
    return (dispatch) => {
        dispatch({ type: LOADING });

        axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: GET_FRIENDS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching the friend data.' })
        })
    }
}

// POST
export const createFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({ type: LOADING });

        axios.post('http://localhost:5000/api/friends', newFriend)
        .then(response => {
            dispatch({ type: GET_FRIENDS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Trouble creating new friend.'})
        })
    }
}

// DELETE

export const deleteFriend = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: GET_FRIENDS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Trouble deleting friend, please try again.'})
        })
    }
}

// PUT
export const updateFriend = (updatedFriend) => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        
        axios.put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
        .then(response => {
            dispatch({ type: GET_FRIENDS, friends: response.data })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble updating friend."})
        })
    }
}