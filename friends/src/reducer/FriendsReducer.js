import{PROCESSING_DATA,PROCESSING_DATA_SUCCESS,PROCESSING_DATA_ERROR} from "../actions"

const initialState = {
  friends: [],
  processingData:false,
  error: null
}


export const friendsReducer = (state=initialState,action) =>{
switch (action.type) {
  case PROCESSING_DATA:
    return Object.assign({},state,{processingData:true});
  case PROCESSING_DATA_SUCCESS:
      return Object.assign({},state,{
          friends:[...state.friends,...action.payload],
          processingData:true
      });
      case PROCESSING_DATA_ERROR:
        return Object.assign({},state,{
          processingData:false,
          error:'api error'
        });
    break;
  default:
    return state;
}


}
