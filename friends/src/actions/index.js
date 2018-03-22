import axios from 'axios';

export const GETTINGFRIENDS = 'GETTINGFRIENDS';
export const GOTFRIENDS = 'GOTFRIENDS';
export const ADDINGFRIEND = 'ADDINGFRIEND';
export const ADDEDFRIEND = 'ADDEDFRIEND';
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

export const addFriends = (friend) => dispatch => {
    dispatch({ type: ADDINGFRIEND });
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(request  => {
            dispatch({ type: ADDEDFRIEND, friends: request.data})
        })
        .catch(err =>{
            dispatch({ type: ERROR, errorMessage: 'Error adding friend' })
        })
}