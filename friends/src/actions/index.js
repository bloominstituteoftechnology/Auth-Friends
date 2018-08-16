import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';


const fetchFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch)  {
        dispatch({ type: FETCHING_FRIENDS });
        //Fetching puts us in a pending state
         friends
           .then(results => {
               dispatch({ type: FRIENDS_FETCHED, payload: results.data});
        //fetched puts us in a resolved state
           })   
           .catch(err => {
               dispatch ({ type: ERROR_FETCHING_FRIENDS, payload: err });
        //error puts us in a rejected state
           });
        };
    };

export default fetchFriends;