import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const UPDATED = "UPDATED";
export const UPDATING = "UPDATING";


export const friendFetcher = ( ) => {
  return function(dispatch) {
    dispatch({ type: FETCHING });

    axios
      .get("http://localhost:5000/api/friends")
      .then(data => {
        dispatch({ type: FETCHED, payload: data.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, error: err });
      });
    };
};

export const friendUpdater = (props) => {
    return function(dispatch) {
        dispatch({ type: UPDATING });

    const newFriend= {
        name: props.state.name,
        age: props.state.age,
        email: props.state.email,
    }
    axios
      .post("http://localhost:5000/api/friends", newFriend)
      .then(data => {
        dispatch({ type: UPDATED, payload: data.data });
    });
  };
};
