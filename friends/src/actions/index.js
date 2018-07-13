import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING });

        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({ type: FETCHED, payload: res.data })
            })
            .catch(err =>
                dispatch({
                    type: ERROR,
                    error: err
                }));
    }
};

export const addFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: SAVING_FRIEND});
        
        setTimeout(() => {
            dispatch({
                type: FRIEND_SAVED,
                payload: newFriend
            })}, 2000
        )
        
    }
};