import axios from 'axios';
export const PENDING_FRIENDS = 'PENDING_FRIENDS';
export const ERROR = 'ERROR';
export const SUCCESS_FRIENDS = 'SUCCESS_FRIENDS';


export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({type: PENDING_FRIENDS});

        getFriends
            .then((response) => {
                dispatch({type: SUCCESS_FRIENDS, payload: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
    }

}

export const createFriend = newFriend => {
    const addNewFriend = axios.post('http://localhost:5000/api/friends', newFriend);
    return function(dispatch) {
        dispatch({type: PENDING_FRIENDS})
        addNewFriend
            .then((response) => {
                dispatch({type: SUCCESS_FRIENDS, payload: response.data});
            })
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
    }
}