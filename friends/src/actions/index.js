import axios from 'axios';

export const ERROR = 'ERROR';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const CREATE_FRIEND = 'CREATE_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const SELECT_FRIEND = 'SELECT_FRIEND';
export const TOGGLE_FRIEND = 'TOGGLE_FRIEND';

export const getFriends = ()=> {
    return dispatch=> {
        dispatch({type: FETCHING_FRIENDS});
        axios.get('http://localhost:5000/api/friends')
            .then(response=> {
                dispatch({type: FETCH_FRIENDS, payload: response.data});
            })
            .catch(err=> {
                dispatch({type: ERROR, payload: err});
            });
    };
};

export const createFriend = (friend)=> {
    return dispatch=> {
        dispatch({type: CREATING_FRIEND});
        axios.post('http://localhost:5000/api/friends', friend)
            .then(({data})=> {
                dispatch({type: CREATE_FRIEND, payload: data});
            })
            .catch(err=> {
                dispatch({type: ERROR, payload: err});
            })
    };
};

export const deleteFriend = id=> {
    return dispatch=> {
        dispatch({type: DELETING_FRIEND});
        axios.delete('http://localhost:5000/api/friends', {
            data: {id}
        })
            .then(({data})=> {
                dispatch({type: DELETE_FRIEND, payload: data});
                dispatch({type: SELECT_FRIEND, payload: {}});
            })
            .catch(err=> {
                dispatch({type: ERROR, payload: err});
            })
    };
};

export const toggleFriend = ()=> {
    return {
        type: TOGGLE_FRIEND
    };
};

export const selectFriend = ()=> {
    return {
        type: SELECT_FRIEND
    };
};