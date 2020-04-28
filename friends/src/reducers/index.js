import{ 
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    START_ADDING,
    FRIEND_ADDED,
    FRIEND_FAIL
}from "../actions";

const initialState = {
    Friends: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
            case FETCH_SUCCESS:
                return{
                    ...state,
                    isFetching: false,
                    error: '',
                    Friends: action.payload
                };
                case FETCH_FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        error: action.payload
                    };
                    case START_ADDING:
                        return {
                            ...state,
                            isFetching: true,
                            error: ''

                        }
                        case FRIEND_ADDED:
                            return {
                                ...state,
                                isFetching: false,
                                error: '',
                                Friends: action.payload
                            };
                            case FRIEND_FAIL:
                                return {
                                    ...state,
                                    isFetching: false,
                                    error: action.payload
                                }

                                






                    default:
                        return state;

                }
                
                    
}


export default reducer;