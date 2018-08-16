import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    friends: [{"id":1,"name":"Benji","age":300,"email":"ben@lambdaschool.io"}],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}