import axios from 'axios';

export const getFriends = () => dispatch => {
    dispatch({ type: 'FETCHING'})

    axios
        .get('http://localhost:5000/api/friends')
            .then( response => {
                dispatch({type: 'FETCHED', friends: response.data});
            })
            .catch(error => {
                dispatch({type:'ERROR', errorMessage: `There was and error: ${error}`});
            })

}

export const addNewFriend = (friend) => dispatch => {
    dispatch({ type: 'SAVING'})

    axios
        .post('http://localhost:5000/api/friends', friend)
            .then(response => {
                dispatch({type: 'SAVED', friends: response.data});
            })
            .catch(error => {
                dispatch({type:'ERROR', errorMessage: `There was and error: ${error}`});
            })
}

export const deleteFriend = (friend) => dispatch => {
    dispatch({ type: "DELETING" })
    

    axios
        .delete(`http://localhost:5000/api/friends/${friend.id}`)
            .then(response => {
                dispatch({type: 'DELETED', friends: response.data});
            })
            .catch(error => {
                dispatch({type: 'ERROR', errorMessage: `Threre was an error: ${error}`});
            })

}

export const updateFriend = (friend) => dispatch => {
    dispatch({type: 'UPDATING'})
    axios
        .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
            .then(response => {
                console.log(response.data);
                dispatch({type: 'UPDATED', friends: response.data});
            })
            .catch(error => {
                dispatch({type: 'ERROR', errorMessage: `Threre was an error: ${error}`});
            })


}