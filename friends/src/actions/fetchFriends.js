export const fetchFriends = () => {
    const getFriends = axios.get('http://localhost:5000/api/friends');
    return function(dispatch) {
        dispatch({ type: FETCH_FRIENDS });
        getFriends
         .then(someData => {
            dispatch({ type: FRIENDS_FETCHED, payload: someData});
        })
         .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};
