import axios from 'axios';

export const FETCHING = ' FETCHING';
export const FETCHED = ' FETCHED';
export const ERROR = ' ERROR';
export const ADDED_FRIEND = 'ADDED_FRIEND';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING });
        axios.get(`http://localhost:5000/api/friends`)
            .then(response => {
                dispatch({ type: FETCHED, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: ERROR, payload: `Error Fetching Data: ${error}`})
            })
    }
}

export const addedFriend = (friend) => {
    console.log(props);
    return (dispatch) => {
        dispatch({ type: FETCHING });
        axios.post('http://localhost:5000/api/friends', friend)
            .then(response => {
                dispatch({ type: ADDED_FRIEND, payload: response.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: ERROR, payload: `Error Fetching Data: ${error}`})
            })
    }
}
