// import XXX from XXX

const initialState = {
    friends: [],
    fetching: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state, 
                fetching: false,
                error: action.payload
            };
        default: 
            return state;
    }
};