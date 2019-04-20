import {PICTURE_GET, PICTURE_SUCCESS, PICTURE_FAIL} from '../actions'

const initialState = {
    img: {},
    fetching: false,
    error: null,
}

export const pictureReducer = (state = initialState, action) => {
    switch (action.type) {
        case PICTURE_GET:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case PICTURE_SUCCESS:
            return {
                ...state,
                fetching: false,
                img: action.payload,
            }
        case PICTURE_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        default: 
            return state
    }
}