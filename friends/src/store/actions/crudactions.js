import Axios from 'axios';

export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POSTED_FRIEND = 'POSTED_FRIEND';
export const POST_ERROR = 'POST_ERROR';
export const GETTING_FRIEND = 'GETTING_FRIEND';
export const GOT_FRIEND = 'GOT_FRIEND';
export const GET_ERROR = 'GET_ERROR';
// export const GETTING_SINGLE_FRIEND = 'GETTING_SINGLE_FRIEND';
// export const GOT_SINGLE_FRIEND = 'GOT_SINGLE_FRIEND';
// export const GET_SINGLE_ERROR = 'GET_SINGLE_ERROR';
// export const PUTTING_FRIEND = 'PUTTING_FRIEND';
// export const PUT_FRIEND = 'PUT_FRIEND';
// export const PUT_ERROR = 'PUT_ERROR';
// export const DELETING_FRIEND = 'DELETING_FRIEND';
// export const DELETED_FRIEND = 'DELETED_FRIEND';
// export const DELETE_ERROR = 'DELETE_ERROR';

const dataSource = 'http://localhost:5000/api/friends/';

// Create (POST)
export const postFriend = (newFriend) => {
    return (dispatch) => {
        dispatch( {type: POSTING_FRIEND} );
        Axios
            .post(dataSource, newFriend)
            .then( (response) => {
                dispatch( {type: POSTED_FRIEND, payload: response.data.results} );
            })
            .catch( (err) => {
                dispatch( {type: POST_ERROR, payload: err.message} )
            });
    };
};

// Read (GET)
export const getFriends = () => {
    return (dispatch) => {
        dispatch( {type: GETTING_FRIEND} );
        Axios
            .get(dataSource)
            .then( (response) => {
                dispatch( { type: GOT_FRIEND, payload: response.data.results } );
            })
            .catch( (err) => {
                dispatch({ type: GET_ERROR, payload: err.message });
            });
    };
};

// I could also just do this as a single action creator within getFriends, but eh *shrug*
// Read single (GET id)
// export const getSingleFriend = (friendId) => {
//     return (dispatch) => {
//         dispatch( {type: GETTING_SINGLE_FRIEND} );
//         Axios
//             .get(`${dataSource}/${friendId}`)
//             .then( (response) => {
//                 dispatch( { type: GOT_SINGLE_FRIEND, payload: response.data.results } );
//             })
//             .catch( (err) => {
//                 dispatch({ type: GET_SINGLE_ERROR, payload: err.message });
//             });
//     };
// };

// Update (PUT)
// export const putFriend = (updatedFriend) => {
//     return (dispatch) => {
//         dispatch( {type: PUTTING_FRIEND} );
//         Axios
//             .put(`${dataSource}/${updatedFriend.id}`, updatedFriend)
//             .then( (response) => {
//                 dispatch( {type: PUT_FRIEND, payload: response.data.results} );
//             })
//             .catch( (err) => {
//                 dispatch( {type: PUT_ERROR, payload: err.message} )
//             });
//     };
// };

// Delete (DELETE)
// export const deleteFriend = (friendId) => {
//     return (dispatch) => {
//         dispatch( {type: DELETING_FRIEND} );
//         Axios
//             .delete(`${dataSource}/${friendId}`)
//             .then( (response) => {
//                 dispatch( { type: DELETED_FRIEND, payload: response.data.results } );
//             })
//             .catch( (err) => {
//                 dispatch({ type: DELETE_ERROR, payload: err.message });
//             });
//     };
// };
