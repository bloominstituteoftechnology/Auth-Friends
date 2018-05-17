import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const ERROR = "ERROR";
export const BEGIN_EDIT = "BEGIN_EDIT";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const BEGIN_ADD = "BEGIN_ADD";
export const CANCEL_ADD = "CANCEL_ADD";


export const fetcher = (url) => {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch({type: FETCHING_FRIENDS});
    request.then((data) => {
      dispatch({type: FETCHED_FRIENDS, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export const cancelEdit = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_EDIT});
  }
}

export const beginEdit = () => {
  return (dispatch) => {
    dispatch({type: BEGIN_EDIT});
  }
}

export const cancelAdd = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_ADD});
  }
}

export const beginAdd = () => {
  return (dispatch) => {
    dispatch({type: BEGIN_ADD});
  }
}
