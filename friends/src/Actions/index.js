import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const friendsObject = () => ({
    type: FRIENDS_FETCHED,
    payload: [{
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com'  //empty array or put this elsewhere? 
    }]
});   //why parens and curly? 

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