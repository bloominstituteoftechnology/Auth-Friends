export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const POSTING_FRIENDS = 'POSTING_FRIENDS';
export const FRIEND_POSTED = 'FRIEND_POSTED';

export const ERROR = 'ERROR'; 

export const getFriends = () => {
    const request = axios.get('http://localhost:5000/api/friends');
    return (dispatch) => {
        dispatch({type:FETCHING_FRIENDS})// here we are going trun fetchingFriends to true because we are attempting to get them. 
        request.then((response) => {
            dispatch({type: FRIENDS_FETCHED, payload: response.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type:ERROR, payload: error})
        });
    };
};


export const postFriends = () => {
    const request = axios.post('http://localhost:5000/api/friends');
    return (dispatch) => {
        dispatch(type:POSTING_FRIENDS)
    }
}