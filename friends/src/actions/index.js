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
                dispatch({type: 'SAVED', friend});
            })
            .catch(error => {
                dispatch({type:'ERROR', errorMessage: `There was and error: ${error}`});
            })
}