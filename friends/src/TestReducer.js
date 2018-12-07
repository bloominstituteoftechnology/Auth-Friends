import {FORM,FETCHING,RESP_SUCCESS,RESP_FAILURE,ADDING} from "./TestActions"


const initialState = {
    friends:[],
    error:null,
    fetching:false,
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case FORM:
            return {...state,form:{...action.payload}}
        case FETCHING:
            return {...state, fetching:true}
        case ADDING:
            return {...state}
        case RESP_SUCCESS:
            return {...state, friends: action.payload,
                error:null, fetching:false
            }
        case RESP_FAILURE:
            return {...state, error: action.payload, fetching:false}
        default:
            return state;
    }
}



export default reducer;