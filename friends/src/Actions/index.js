import axios from 'axios';


export const FETCH_START = 'FETCH_START';
export const FETCH_GOOD = 'FETCH_GOOD';
export const FETCH_FAIL = 'FETCH_FAIL';
export const POST_GOOD = 'POST_GOOD';
export const POST_FAIL = 'POST_FAIL';
export const POST_START = 'POST_START';
export const FETCH_SPECIFIC_START = 'FETCH_SPECIFIC_START';
export const FETCH_SPECIFIC_GOOD = 'FETCH_SPECIFIC_GOOD';
export const FETCH_SPECIFIC_FAIL = 'FETCH_SPECIFIC_FAIL';
// export const DELETE_SPECIFIC_START ='DELETE_SPECIFIC_START';
// export const DELETE_SPECIFIC_GOOD = 'DELETE_SPECIFIC_GOOD';
// export const DELETE_SPECIFIC_FAIL = 'DELETE_SPECIFIC_FAIL';
// export const UPDATE_SPECIFIC_START = 'UPDATE_SPECIFIC_START';
// export const UPDATE_SPECIFIC_GOOD = 'UPDATE_SPECIFIC_GOOD';
// export const UPDATE_SPECIFIC_FAIL = 'UPDATE_SPECIFIC_FAIL';


// Post_FAIL;




export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get('http: //localhost:5000')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_GOOD, payload: response.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FETCH_FAIL, payload: error });
        });
}

export const addFriend = (data) => dispatch => {
    dispatch({ type: POST_START });
    axios
        .post('http: //localhost:5000', data)
        .then(response => {
            console.log(response);
            dispatch({ type: POST_GOOD, payload: response.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: POST_FAIL, payload: error });
        });
}

// addFriend = data => {
//     axios
//         .post(url, data)
//         .then(response => {
//             console.log(response);
//             this.setState({ stateFriendsData: response.data });
//         })
//         .catch(err => console.log(err));
// };


// export const fetchSpecificData = () => dispatch => {
//     dispatch({ type: FETCH_SPECIFIC_START });
//     axios
//         .get()
//         .then(response => {
//             console.log(response);
//             dispatch({ type: FETCH_SPECIFIC_GOOD, payload: response.data });
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: FETCH_SPECIFIC_FAIL, payload: error });
//         });
// }

// export const update = () => dispatch => {
//     dispatch({ type: FETCH_START });
//     axios
//         .get()
//         .then(response => {
//             console.log(response);
//             dispatch({ type: FETCH_GOOD, payload: response.data });
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: FETCH_FAIL, payload: error });
//         });
// }




// delete = id => {
//     axios
//         .delete(`${url}/${id}`)
//         .then(response => this.setState({ stateFriendsData: response.data }))
//         .catch(err => console.log(err));
// };

// update = (id, data) => {
//     axios
//         .put(`${url}/${id}`, data)
//         .then(response => this.setState({ stateFriendsData: response.data }))
//         .catch(err => console.log(err));

// };


// savingFriends;