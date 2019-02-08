import { DELETING, SUCCESS, FAILURE, LOADING, ADDING, ADDED, EDITING, EDITED, DELETED, EDITFORM } from '../actions';

const initialState = {
    friends: [],
    loading: true,
    error: '',
    adding: false,
    added: false,
    editing: false,
    edited: false,
    deleting: false,
    isisEditForm: false,
    editId: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type){

        case EDITFORM: 
        console.log( {
            ...state,
            friends: [],
            loading: false,
            error: '',
            adding: false,
            added: false,
            editing: false,
            edited: false,
            deleting: false,
            currentFriend: false,
            isEditForm: true,
            editId: action.payload
        } )
            return {
                ...state,
                friends: [],
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentFriend: false,
                isEditForm: true,
                editId: action.payload
            } 
        case DELETING: 
            return {
                ...state,
                friends: [],
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: true,
                currentFriend: false
                
            }

        case DELETED: 
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                deleted: true,
                currentFriend: false
                
            }

        case ADDING: 
            return {
                ...state,
                friends: [],
                loading: false,
                error: '',
                adding: true,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentFriend: false
            }

        case ADDED: 
            
            return  {
                ...state,
                friends: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: true,
                editing: false,
                edited: false,
                deleting: false,
                currentFriend: false
            }

        case EDITING: 

            return {
                ...state,
                friends: [],
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: true,
                edited: false,
                deleting: false,
                currentFriend: false
            }

        case EDITED: 

            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: true,
                deleting: false,
                currentFriend: false
            }

        case LOADING:
            return {
                ...state,
                friends: [],
                loading: true,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentFriend: false
            }
        
        case SUCCESS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentFriend: false
            }

        case FAILURE: 
            return {
                ...state,
                friends: [],
                loading: false,
                error: 'We had a trouble finding this',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentFriend: false
            }

        default: 
            return state;
    }
}
