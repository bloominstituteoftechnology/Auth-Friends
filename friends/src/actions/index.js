import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

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
            })}, 1000
        )
        
    }
};

export const deleteFriend = (id) => {
    return (dispatch) => {
        dispatch({type: DELETING_FRIEND});

        setTimeout(()=> {
            dispatch({
                type: FRIEND_DELETED,
                id: id
                
            })
        }, 1000)
    }
}