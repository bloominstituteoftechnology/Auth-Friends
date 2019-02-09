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
    editForm: false,
    addForm: true,
    editId: null,
    friend: {}
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type){

        case EDITFORM: 
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
                editForm: true,
                addForm: false,
                friend: action.payload
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
                currentFriend: false,
                editForm: true,
                addForm: false,
                editId: null
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                friend: action.payload
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
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
                deleted: false,
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
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
                currentFriend: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        default: 
            return state;
    }
}
