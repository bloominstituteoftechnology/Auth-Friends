import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING_FRIENDS ="SAVING_FRIENDS";
export const FRIENDS_SAVED = "FRIENDS_SAVED";


export const fetchingFriendsAction = () => {
        const request = axios.get('http://localhost:5000/api/friends/');

        return (dispatch) => {
        dispatch({type: FETCHING});

        request.then(response => {
        dispatch({type: FETCHED, friends: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};


export const addFriend = (name, age, email) => {
	const friend = {name:name, age:age, email:email};
        const request = axios.post('http://localhost:5000/api/friends/', friend);

        return (dispatch) => {
        dispatch({type: SAVING_FRIENDS});

        request.then(response => {
        dispatch({type: FRIENDS_SAVED, friends: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};

