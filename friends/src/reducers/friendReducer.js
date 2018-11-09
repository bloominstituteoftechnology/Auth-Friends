const initialState = {
    friends: [{"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"},{"id":2,"name":"Austen","age":45,"email":"austen@lambdaschool.com"},{"id":3,"name":"Ryan","age":15,"email":"ryan@lambdaschool.com"},{"id":4,"name":"Sean","age":35,"email":"sean@lambdaschool.com"},{"id":5,"name":"Michelle","age":67,"email":"michelle@gmail.com"}],
    loading: false,
    error: null,
}

export default (state=initialState,action) => {

    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {loading: true})
        case SUCCESS:
            return Object.assign({}, state, {friends:action.friends, loading: false, error:null})
        case ERROR:
            return Object.assign({}, state, {error:action.errorMessage, loading:false} )
        default:
            return state
    }
}