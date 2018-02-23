import axios from 'axios';

export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const SHOW_CREATE_FORM = 'SHOW_CREATE_FORM';

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
        dispatch({type: IS_FETCHING});
        friends
            .then(response => {
                dispatch({type: FRIENDS_FETCHED, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR_FETCHING_FRIENDS, payload: err});
            });
    };
};

export const deleteFriend = (index) => {
    const deleteFriend = axios.delete('http://localhost:5000/api/friends/delete', {
        data: {index}
    });

    return dispatch => {
        dispatch({type: DELETE_FRIEND});
        deleteFriend
            .then(({data}) => {
                dispatch({type: DELETE_FRIEND, payload: data, visible:true});

                // This dispatch visible false 2 seconds after deleting message.
                setTimeout(function(){
                    dispatch({type: DELETE_FRIEND, payload: data, visible:false});
                }, 2000);

                dispatch({type: FRIENDS_FETCHED, payload: data});
            })
            .catch(err => {
                console.log('error deleting friend', err);
                dispatch({type: ERROR_FETCHING_FRIENDS, payload: err});
            });
    };
};

export const updateFormVisible = (friend) => {
    return dispatch => {
        dispatch({type: UPDATE_FRIEND, payload: friend, updateVisible:true});
    };
};

export const createFormVisible = (value) => {
  return dispatch => {
      dispatch({type: SHOW_CREATE_FORM, createFormVisibility:value});
  };
}

export const updateSingleFriend = (friend, index) => {

    const updateFriend = axios.put('http://localhost:5000/api/friends/update', {
        index: index,
        update: friend
    });

    return dispatch => {
        dispatch({type: UPDATE_FRIEND});
        updateFriend
            .then(({data}) => {
                dispatch({type: FRIENDS_FETCHED, payload: data});
                dispatch({type: UPDATE_FRIEND, payload: friend, updateVisible:false});
            })
            .catch(err => {
                console.log('error updating friend', err);
                dispatch({type: ERROR_FETCHING_FRIENDS, payload: err});
            });
    };
};


export const createNewFriend = (friend, index) => {

    const newFriend = axios.post('http://localhost:5000/api/friends/create', {
        index: index,
        update: friend
    });

    return dispatch => {
        dispatch({type: UPDATE_FRIEND});
        newFriend
            .then(({data}) => {
                dispatch({type: FRIENDS_FETCHED, payload: data});
                dispatch({type: UPDATE_FRIEND, payload: friend, updateVisible:false});
            })
            .catch(err => {
                console.log('error updating friend', err);
                dispatch({type: ERROR_FETCHING_FRIENDS, payload: err});
            });
    };
};
