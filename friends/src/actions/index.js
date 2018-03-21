import axios from 'axios';

export const GETTINGFRIENDS = 'GETTINGFRIENDS';
export const GOTFRIENDS = 'GOTFRIENDS';
export const NEWFRIENDS = 'NEWFRIENDS';
export const ERROR = 'ERROR';


export const initFriends = () => dispatch => {
    dispatch({ type: GETTINGFRIENDS
 });

    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: GOTFRIENDS, friends: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
        });
};

export const addFriends = (friendData) => dispatch => {
    axios
        .post('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: NEWFRIENDS, input: friendData})
        })
}