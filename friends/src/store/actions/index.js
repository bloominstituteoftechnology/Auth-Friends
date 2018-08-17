import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIENDS, FRIENDS_SAVED, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND, FRIEND_DELETED, ERROR} from '../action-types';

export const fetchingAction = () => {
  return function(dispatch) {
    dispatch({type: FETCHING_FRIENDS});
    axios.get('http://localhost:5000')
    .then(response => {
      if (response === undefined) {
        dispatch({ type: ERROR, payload: "Oops! Something went wrong :("})
      } else {
        dispatch({ type: FETCHED, payload: response.data.results })
      }
    })
    .catch(error => {
      dispatch({type: ERROR, payload: 'Server Error! Oh no!'})
    });
  }
}

export const savingNewFriend = (friend) => {
  return function(dispatch) {
    dispatch({type: SAVING_FRIENDS, payload: friend});
    axios.post('http://localhost:5000', friend)
    .then(response => {
      dispatch({type: FRIENDS_SAVED, payload: response.data.results})
    })
    .catch(error => {
      dispatch({type: ERROR, payload: "Oops! Something went wrong saving your friend :("})
    });
  }
}
