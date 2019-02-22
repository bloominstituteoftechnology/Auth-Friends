import { FETCH, SUCCESS, FAIL, ADD, ADDSUC, DEL, DELSUC } from '../actions/actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: ""
}

function reducer (state = initialState, action) {
    console.log('reducer', action)
    switch(action.type) {
        case FETCH:
            return {
            ...state,
            fetchingFriends: true,
            error:
                "Maybe you have no friends?"
        }
        case SUCCESS:
            return {
            ...state,
            friends: action.payload,
            fetchingFriends: false,
            error: ""
        }
        case FAIL:
            return {
            ...state,
            fetchingFriends: false,
            error: action.payload
        }
        case ADD:
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false
            }
        case ADDSUC:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true
            }
        case DEL:
            return {
                ...state,
                deletingFriend: true,
                friendDeleted: false,
                error: ""
            }
        case DELSUC:
            return {
                ...state,
                deletingFriend: false,
                friendDeleted: true,
                error: "",
                friends: action.payload
            }
    default:
        return state
    }
}

export default reducer; 