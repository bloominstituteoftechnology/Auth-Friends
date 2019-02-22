



const initialState = {
  friends: [],
  isFetching: false,
  fail:""

};

function reducer (state = initialState, action){
  console.log('redu')
}
export const frinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
    return Object.assign({},state,{fetch:true,friends:[],fail:""})
    case SUCCESS:
    return {...state,fetch:false,friends:action.payload,error:""}
    case FAIL:
    return {...state, fetch:false,friends:[], error: action.payload}
    default:
    return state;

    
  }
};
