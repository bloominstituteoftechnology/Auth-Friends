import axios from 'axios';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const UPDATING = "UPDATING";

export const getFriends = () => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios
            .get('http://localhost:5000/api/friends')
            .then( response => {
                dispatch({ type: SUCCESS, friends: response.data})
            })
            .catch( err => {
                dispatch({type: ERROR, error: 'ERROR FETCHING FRIENDS'})
            })
    }
}

export const createFriend = (friend) => {
    return dispatch => {
        dispatch({  type: PENDING});
        console.log(friend);
        axios
            .post('http://localhost:5000/api/friends', friend)
            .then( response => {
                dispatch({ type: SUCCESS, friends: response.data })
            })
            .catch( () => {
                dispatch( {type: ERROR, error: 'ERROR CREATING FRIEND'})
            })
    }
}

export const deleteFriend = friendId => {
    return dispatch => {
        dispatch({ type: PENDING });
        axios
            .delete(`http://localhost:5000/api/friends/${friendId}`)
            .then(response => {
                dispatch({ type: SUCCESS, friends: response.data })
            })            
            .catch(err =>
                dispatch({ type: ERROR, error: 'ERROR DELETING FRIEND' })
            );
    }
}

export const startEditing = friend => {
    return {
        type: UPDATING,
        friend
    };
};

export const updateFriend = friend => {
    return dispatch => {
        dispatch({ type: PENDING })
        axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
            .then(response => dispatch({ type: SUCCESS, friends: response.data }))
            .catch(err => dispatch({
                type: ERROR, error: "ERROR UPDATING FRIEND"
            }))
    }

}