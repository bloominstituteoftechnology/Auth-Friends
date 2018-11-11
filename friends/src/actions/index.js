import axios from 'axios';

export const FETCHING = 'FETCHING";'
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const ERROR = 'ERROR';


export const fetchingFriends = () => {
    return (dispatch) => {
    dispatch({ type: FETCHING });
    axios.get('http://localhost:5000/api/friends')
        .then( response => {
            dispatch({
                type: FETCHING_FRIENDS,
                friends: response.data,
            });
        })

        .catch( error => {
            dispatch({
                type: ERROR,
                errorMessage: 'Trouble finding Friends',
            });
        });
    }
};

export const addingFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({ type: FETCHING });
        axios.post('http://localhost:5000/api/friends', newFriend)
        .then( response => {
            dispatch({
                type: FETCHING_FRIENDS,
                friends: response.data,
            })
        })
        
        .catch( error => {
            dispatch({
                type: ERROR,
                errorMessage: 'Trouble adding new Friend, Please try again later',
            });
        });
    }
};

export const deleteFriend = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCHING })
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then( response => {
            dispatch({
                type: FETCHING_FRIENDS,
                friends: response.data,
            })
        })
        
        .catch( error => {
            dispatch({
                type: ERROR,
                errorMessage: 'Trouble deleting your Friend, Please try again later',
            });
        });
    }
}

export const updateFriend = (updatedFriend) => {
    return (dispatch) => {
        dispatch({ type: FETCHING })
        axios.put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
        .then( response => {
            dispatch({
                type: FETCHING_FRIENDS,
                friends: response.data,
            })
        })
        
        .catch( error => {
            dispatch({
                type: ERROR,
                errorMessage: 'Trouble updating your Friend',
            });
        });
    }
}