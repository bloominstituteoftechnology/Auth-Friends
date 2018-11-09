import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_FRIENDS = 'GET_FRIENDS';
export const GETTING_FRIENDS = 'GETTING_FRIENDS'


export const getFriends = () => {
    dispatch ({type: GET_FRIENDS});
    axios
        .get('http://localhost:5000/api/friends')
        .then(({data}) => {
            dispatch({
                type: GETTING_FRIENDS, payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: ERROR, payload: error
            });
        });
}