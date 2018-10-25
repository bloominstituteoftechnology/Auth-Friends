import axios from 'axios';

export const friendsObject = () => {
    type: FRIENDS_FETCHED,
    payload: [{
        id: 1
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com'
    }]
};

export const getFriends = () => {
    dispatch({ type: FETCHING_FRIENDS });
    axios  
        .get('http://localhost:5000/friends')
        .then( ({ data }) => {
            dispatch({
                type: FRIENDS_FETCHED, 
                payload: data.results
            });
        })
        .catch(error => {
            dispactch({
                type: FETCHING_FRIENDS_FAILURE,
                payload: error
            });
        }) 
};