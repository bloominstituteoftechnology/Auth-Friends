
const initialState = {
    friends: [],
    fetching: false,
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
        default:
            return state;
    }
}