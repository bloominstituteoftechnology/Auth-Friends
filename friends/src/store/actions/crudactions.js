import Axios from 'axios';

export const CRUD_ERROR = 'CRUD_ERROR';
export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POSTED_FRIEND = 'POSTED_FRIEND';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const GOT_FRIENDS = 'GOT_FRIENDS';
// export const GETTING_SINGLE_FRIEND = 'GETTING_SINGLE_FRIEND';
// export const GOT_SINGLE_FRIEND = 'GOT_SINGLE_FRIEND';
export const PUTTING_FRIEND = 'PUTTING_FRIEND';
export const PUT_FRIEND = 'PUT_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETED_FRIEND = 'DELETED_FRIEND';

const dataSource = 'http://localhost:5000/api/friends';

// Create (POST)
export const postFriend = (newFriend) => {
    console.log('postFriends newFriend', newFriend);
    return (dispatch) => {
        dispatch( {type: POSTING_FRIEND} );
        Axios
            .post(dataSource, newFriend)
            .then( (response) => {
                dispatch( {type: POSTED_FRIEND, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} )
            });
    };
};

// Read (GET)
export const getFriends = () => {
    return (dispatch) => {
        dispatch( {type: GETTING_FRIENDS} );
        Axios
            .get(dataSource)
            .then( (response) => {
                dispatch( {type: GOT_FRIENDS, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} );
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
//                 dispatch( {type: GOT_SINGLE_FRIEND, payload: response.data} );
//             })
//             .catch( (err) => {
//                 dispatch( {type: CRUD_ERROR, payload: err.message} );
//             });
//     };
// };

// Update (PUT)
export const putFriend = (updatedFriend) => {
    return (dispatch) => {
        dispatch( {type: PUTTING_FRIEND} );
        Axios
            .put(`${dataSource}/${updatedFriend.id}`, updatedFriend)
            .then( (response) => {
                dispatch( {type: PUT_FRIEND, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} )
            });
    };
};

// Delete (DELETE)
export const deleteFriend = (friendId) => {
    return (dispatch) => {
        dispatch( {type: DELETING_FRIEND} );
        Axios
            .delete(`${dataSource}/${friendId}`)
            .then( (response) => {
                dispatch( {type: DELETED_FRIEND, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} );
            });
    };
};
