import axios from 'axios';

export const FETCHINGFRIENDS = 'FETCHINGFRIENDS';
export const FETCHEDFRIENDS = 'FETCHEDFRIENDS';
export const FETCHFAIL = 'FETCHFAIL';
export const FRIENDSSAVING = 'FRIENDSSAVING';
export const FRIENDSSAVED = 'FRIENDSSAVED';
export const SAVEFAIL = 'SAVEFAIL';
export const FETCH = 'FETCH';
// export const FRIENDUPDATING = 'FRIENDUPDATING';
// export const FRIENDUPDATED = 'FRIENDUPDATED';
// export const UPDATEFAIL = 'UPDATEFAIL';
// export const FRIENDDELETING = 'FRIENDDELETING';
// export const FRIENDDELETED = 'FRIENDDELETED';
// export const DELETEFAIL = 'DELETEFAIL';

export const friendFetch = () => {
    const froyo = axios.get(`http://localhost:5000/api/friends`);
    return dispatch => {
        dispatch({ type: FETCHINGFRIENDS });
        froyo
            .then(response => {
                console.log(response)
                dispatch({ type: FETCHEDFRIENDS, payload: response.data})
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCHFAIL});
            });
    };
};

export const friendCreate = data => {
    const create = axios.post(`http://localhost:5000/api/friends`, data);
    return dispatch => {
            create
            .then(response => {
                dispatch({type: FETCH, payload: response.data})
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: SAVEFAIL });
            });
    };
};

// export const friendUpdate = () => {
//     const update = axios.put(`http://localhost:5000/api/friends/:id`);
//     return dispatch => {
//         dispatch ({
//             type: FRIENDUPDATING
//         });
//         update
//         .then(reponse => {
//             dispatch({ type: FRIENDUPDATED, payload: response.data.results })
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch({ type: UPDATEFAIL })
//         });
//     };
// };

// export const friendDelete = () => {
//     const smash = axios.delete(`http://localhost:5000/api/friends/:id`);
//     return dispatch ({
//         type: FRIENDDELETING
//     });
//     smash
//     .then(response => {
//         dispatch({
//             type: FRIENDDELETED, payload: response.data.results
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch({ type: DELETEFAIL})
//         });
//     });
// };
