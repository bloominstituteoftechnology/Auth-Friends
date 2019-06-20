import {
  FETCHINGFRIENDS,
  GETSUCCESS,
  GETFAILURE,
  ADDFRIENDS,
  ADDSUCCESS,
  ADDFAILURE,
  EDITFRIENDS,
  EDITSUCCESS,
  EDITFAILURE,
  REMOVEFETCH,
  REMOVESUCCESS,
  REMOVEFAILURE
} from "../actions";

const initialState = {
  friends: [],
  isloadingGET: false,
  successGET: false,
  isloadingPOST: false,
  successPOST: false,
  isloadingPUT: false,
  successPUT: false,
  isloadingDELETE: false,
  successDELTE: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    //GET
    case FETCHINGFRIENDS:
      return {
        ...state,
        friends: [],
        isloading: true
      };
    case GETSUCCESS:
      return {
        ...state,
        friends: [],
        isloading: true
      };
    case GETFAILURE:
      return {
        ...state,
        friends: [],
        isloading: true
      };
    //POST
    case ADDFRIENDS:
      return {
        ...state,
        characters: [...state.characters, action.payload],
        isloading: false,
        success: true
      };
    case ADDSUCCESS:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: false
      };
    case ADDFAILURE:
      return {
        ...state,
        friends: [],
        isloading: true
      };
    //PUT
    case EDITFRIENDS:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: true
      };

    case EDITSUCCESS:
      return {
        ...state,
        characters: state.friends.map(friend => {
          if (friend.id !== action.payload) {
            return friend;
          }
        }),
        isloading: false,
        success: false
      };
    case EDITFAILURE:
      return {
        ...state,
        friends: [],
        isloading: true
      };
    //DELETE
    case REMOVEFETCH:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: true
      };
    case REMOVESUCCESS:
      return {
        ...state,
        characters: state.friends.map(friend => {
          if (friend.id !== action.payload) {
            return friend;
          }
        })
      };
    case REMOVEFAILURE:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: true
      };

    default:
      return state;
  }
};
