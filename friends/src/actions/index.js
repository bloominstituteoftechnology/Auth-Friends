import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const ADDING_ERROR = 'ADDING_ERROR';


export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        axios
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('res', res.data);
                dispatch({ type: FRIENDS_FETCHED, payload: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_ERROR })
            })
    };
};

export const newFriend = friend => dispatch => {
    dispatch ({ type: ADDING_FRIEND });

    axios.post('http://localhost:5000/api/friends', friend)
    .then(res => {
        console.log(friend);
        console.log('newFriend res', res);
        dispatch({ type: FRIEND_ADDED, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: ADDING_ERROR, payload: err });
    });
}