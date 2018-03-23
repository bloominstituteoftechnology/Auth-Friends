import axios from 'axios';

export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const addFriendAction = newFriend => dispatch => {
  axios
    .post('http://localhost:5000/api/friends', newFriend)
    .then(response => {
      dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(error => {
      console.log(`There was an error adding a new friend: ${error}`);
    });
};

export default addFriendAction;
