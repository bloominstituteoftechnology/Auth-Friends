
const initialState = {
    friends: [],
    fetching: false,
    saving: false,
    deleting: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING':
            return {...state, fetching: true};
        case 'ERROR':
            return {...state, error: action.errorMessage };
        case 'FETCHED':
            return { ...state, friends: action.friends, fetching: false };
        case 'SAVING':
            return {...state, saving: true};
        case 'SAVED':
            return {...state, friends: [...state.friends, action.friend], saving: false}
        case 'DELETING':
            return {...state, deleting: true }
        case 'DELETED':
            return {...state, deleting: false, friends: action.friends}
        case 'UPDATING':
            return {...state, updating: true }
        case 'UPDATED':
            return {...state, updating: false, friends: action.friends}
        default:
            return state;
    }
}