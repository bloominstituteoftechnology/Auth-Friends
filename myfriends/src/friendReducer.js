import { FRIENDS_FETCHING, FRIENDS_FETCHED, FRIENDS_ERROR} from "./actions"



const initialState = {
    friends: [{
        "id": 300,
        "name": "Halal",
        "age": 33,
        "email": "Halal@LambdaSchool.com"
    },], fetchingFriends: false,fetchedFriends: false, error:''
}

const friendsReducer = (state = initialState, action ) =>{  
    console.log('k',action.payload);   
switch(action.type ){
    case FRIENDS_FETCHING:
      return Object.assign({}, state, {fetchingFriends:true})
    case FRIENDS_FETCHED:
        return Object.assign({}, state, { friends: [ ...initialState.friends,...action.payload],
            fetchedFriends: true, fetchingFriends: false },
             ) 
    case FRIENDS_ERROR:
        return  " fetching error ..."
    default: 
         return initialState
}
}
export {friendsReducer};