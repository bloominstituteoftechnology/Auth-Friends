import axios from 'axios';


export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const getData = () => dispatch => {
    return (
        axios
            .get('http://localhost:5000/api/friends')
            .then(({ data }) => {
                dispatch({ type: FRIENDS_FETCHED, payload: data })
            })
            .catch(error => console.log(error))
    )
}