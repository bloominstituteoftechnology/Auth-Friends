import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetch = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios.get("http://localhost:5000/api/friends")
        .then(({data})   =>  {
            console.log("DATA:", data);
            dispatch({ type: SUCCESS, payload: data });
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}

export const addFriend = (friend) =>  {
    return dispatch =>  {
        dispatch({ type: FETCHING });
        axios.post("http://localhost:5000/api/friends", friend)
        .then(({data})  =>  {
            dispatch({ type: SUCCESS, payload: data});
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}

export const removeFriend = (id)    =>  {
    return dispatch =>  {
        dispatch({ type: FETCHING });
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(({data})  =>  {
            dispatch({ type: SUCCESS, payload: data});
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}
