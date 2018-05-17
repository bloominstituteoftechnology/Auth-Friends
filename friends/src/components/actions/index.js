import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';

export const fetching_friends = () => {
    const request = axios.get(`http://localhost:5000/api/friends`);
    console.log(request);
    return dispatch => {
        console.log("FETCHING")
        dispatch ({ type: FETCHING })
        request
            .then(function (Fetchdata){
                console.log("FETCH WORKS", Fetchdata.data)
                dispatch ({ type: FETCHED, payload: Fetchdata.data });
            })
            .catch( function(err){
                dispatch({ type: ERROR })
        });
    };
};

//export default fetching_friend;