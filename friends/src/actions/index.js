// we'll need axios
import axios from "axios";
// Define and export our action types
export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchFriends = () => {
  // thunk will then pass the dispatch function to our callback, allowing us to dispatch multiple actions at multiple times.
  return dispatch => {
    // Here we dispatch an initial loading state action.
    dispatch({type: LOADING});
    axios.get(`http://localhost:5000/friends`).then(response => {
      console.log("success!",response.data.results)
      // If the API call is successful, we will pass a success action type and the correct payload
      dispatch({type: FETCHED_FRIENDS, friends: response.data.results});
    }).catch(err => {
        console.log(err)
      // If the API call is not successful, we will pass an action with the Error type.
      dispatch({type: ERROR, payload: "Danger, Will Robinson"});
    });
  };
};
