import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETECHED = 'FRIENDS_FETECHED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        console.log(this.props);
        axios.get('http://localhost:5000/friends')
            .then(response => { dispatch({  type: FRIENDS_FETECHED,
                                            payload: response.data.friends})})
            .catch( err => dispatch({type: ERROR, error: err}));
    };
};

export const saveFriends = (friend) => {
    // console.log(friend);
    return dispatch => {
        dispatch({ type: SAVING_FRIENDS });
        axios.post('http://localhost:5000/friends',
                    {id: friend.id,
                    name: friend.name,
                    age: friend.age,
                    email: friend.email })
            .then(response => { dispatch({  type: FRIENDS_SAVED,
                                            payload: response.data.friends})})
            .catch( err => dispatch({type: ERROR, error: err}));
    };
};

export const updateFriend = () => {
    return dispatch => {
        dispatch({ type: UPDATING_FRIEND });
        axios.get('http://localhost:5000/friends')
            .then(response => { dispatch({  type: FRIEND_UPDATED,
                                            payload: response.data.friends})})
            .catch( err => dispatch({type: ERROR, error: err}));
    };
};

export const deleteFriend = () => {
    return dispatch => {
        dispatch({ type: DELETING_FRIEND });
        axios.get('http://localhost:5000/friends')
            .then(response => { dispatch({  type: FRIEND_DELETED,
                                            payload: response.data.friends})})
            .catch( err => dispatch({type: ERROR, error: err}));
    };
};