import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FREINDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchFriends = () => dispatch => {
dispatch({type: FETCHING_FRIENDS});
axios
.get('http://localhost:5000/api/friends')
.then(response => {
    console.log(response);
    dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: response.data})
}) 
.catch(error => {
    dispatch({type: FETCHING_FRIENDS_FAILURE, payload: error})
})
}

export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POSTING_FRIEND_SUCCESS = 'POSTING_FRIEND_SUCCESS';
export const POSTING_FRIEND_FAILURE = 'POSTING_FRIEND_FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const postFriend = (fname, fage, femail) => dispatch => {
dispatch({type: POSTING_FRIEND});
axios
.post('http://localhost:5000/api/friends', {
    name: fname,
    age: fage,
    email: femail
})
.then(response => {
    console.log(response);
    dispatch({type: POSTING_FRIEND_SUCCESS, payload: response.data})
}) 
.catch(error => {
    dispatch({type: POSTING_FRIEND_FAILURE, payload: error})
})
}
