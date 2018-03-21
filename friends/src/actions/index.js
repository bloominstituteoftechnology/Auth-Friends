import axios from 'axios';

export const getFriends = () => dispatch => {
    dispatch({ type: 'FETCHING_FRIENDS' });

    axios.get('http://localhost:5000/api/friends').then(response => {
        dispatch({ type: 'FETCHED_FRIENDS', friends: response.data });
    }).catch(error => {
        dispatch({ type: 'ERROR', errorMessage: 'Error fetching the data' });
    })
}

export const saveFriends = (friend) => dispatch => {
    dispatch({ type: 'SAVING_FRIENDS' });

    axios.post('http://localhost:5000/api/friends', friend).then(response => {
        dispatch({ type: 'SAVED_FRIENDS', friends: response.data });
    }).catch(error => {
        dispatch({ type: 'ERROR', errorMessage: 'Error saving the data' });
    })
}

export const updateFriends = () => dispatch => {
    dispatch({ type: 'UPDATING_FRIENDS' });

    axios.put('http://localhost:5000/api/friends/:id', {}).then(response => {
        dispatch({ type: 'UPDATED_FRIENDS', friends: response.data });
    }).catch(error => {
        dispatch({ type: 'ERROR', errorMessage: 'Error updating the data' });
    })
}

export const deleteFriends = () => dispatch => {
    dispatch({ type: 'DELETING_FRIENDS' });

    axios.delete('http://localhost:5000/api/friends/:id').then(response => {
        dispatch({ type: 'DELETED_FRIENDS', friends: response.data});
    }).catch(error => {
        dispatch({ type: 'ERROR', errorMessage: 'Error deleting the data' });
    })
}