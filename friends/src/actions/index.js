import axios from "axios";

export const FETCHING_FRIEND = "FETCHING_FRIEND";
export const FETCHED_FRIEND = "FETCHED_FRIEND";
export const DELETE_FRIEND = 'DELETE_FRIEND'
export const SUBMITFRIEND = "SUBMITFRIEND";
export const EDIT_FRIEND = 'EDIT_FRIEND'


export const fethcing_friend = () => {
  const request = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING_FRIEND });
    request
      .than(({ data }) => {
        dispatch({ type: FETCHED_FRIEND, data: data.results });
      })
      .cathc(err => {
        console.log(err);
      });
  };
};

export const nfriend = (nfriend) => {
    const request = axios.post("http://localhost:5000/api/friends", nfriend);
    return (dispatch) => {
        dispatch({type: FETCHING_FRIEND})
        request.then(({data}) => {
          dispatch({type: FETCHED_FRIEND, friends: data});
        })
        .catch(err => {
            console.log(err);
        });
      };

} 

export const deleteFriend = (id) => {
    const request = axios.delete(`http://localhost:5000/api/friends/${id}`)
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({type: DELETE_FRIEND, friends: data});
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const editFriend = (id, friends) => {
    return { type: EDIT_FRIEND, friends, id }
}

export const submitFriend = (nfriend) => {
    console.log(nfriend)
    const request = axios.put(`http://localhost:5000/api/friends/${nfriend.id}`, nfriend)
    return (dispatch) => {
        request.then(({data}) => {
          dispatch({type: SUBMIT_FRIEND, friends: data});
        })
        .catch(err => {
            console.log(err);
        });
      };
}