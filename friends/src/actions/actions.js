import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR = 'ERROR';



export const getFriends = () => {
    const Friends = axios.get('http://localhost:5000/api/friends/');
    return (dispatch) => {
        dispatch({type: FETCHING_FRIENDS});
        Friends
            .then(response => {
                console.log(response)
                dispatch({
                    type: FRIENDS_FETCHED,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'Couldn\'t fetch the friends\'s list'
                });
            });
    };
};

