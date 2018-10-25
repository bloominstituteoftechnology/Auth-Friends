const initialState = false

export const loadingReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCHING':
        return true
        default:
        return state
    }

}