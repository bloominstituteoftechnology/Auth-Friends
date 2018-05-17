import axios from 'axios';

export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';

export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        // dispatch({ type: FETCHING_FRIENDS });
        getFriends
            .then(data => {
                console.log(data);
                dispatch({ type: FETCHED_FRIENDS, payload: data.data });
            })
            // .catch(err => {
            //     dispatch({ type: ERROR, payload: err});
            // })
    }
}
