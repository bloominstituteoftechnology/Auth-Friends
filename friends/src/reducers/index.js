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
  REMOVEFAILURE,
  LOGINFETCH,
  LOGINSUCCESS,
  LOGINFAILURE
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
  successDELTE: false,
  isloadingLOGIN: false,
  successLOGIN: false,
  user: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    //GET
    case FETCHINGFRIENDS:
      return {
        ...state,
        friends: [],
        isloadingGET: true
      };
    case GETSUCCESS:
      return {
        ...state,
        friends: action.payload,
        isloadingGET: false,
        successGET: true
      };
    case GETFAILURE:
      return {
        ...state,
        friends: [],
        isloadingGET: false,
        successGET: false
      };
    //POST
    case ADDFRIENDS:
      return {
        ...state,
        isloadingPOST: false,
        successPOST: true
      };
    case ADDSUCCESS:
      return {
        ...state,
        friends: [...state.characters, action.payload],
        isloadingPOST: false,
        successPOST: true
      };
    case ADDFAILURE:
      return {
        ...state,
        isloadingPOST: false,
        successPOST: false
      };
    //PUT
    case EDITFRIENDS:
      return {
        ...state,
        isloadingPUT: true,
        successPUT: false
      };

    case EDITSUCCESS:
      return {
        ...state,
        characters: state.friends.map(friend => {
          if (friend.id !== action.payload) {
            return friend;
          }
        }),
        isloadingPUT: false,
        successPUT: true
      };
    case EDITFAILURE:
      return {
        ...state,
        isloadingPUT: false,
        successPUT: false
      };
    //DELETE
    case REMOVEFETCH:
      return {
        ...state,
        isloadingDELETE: true,
        successDELETE: false
      };
    case REMOVESUCCESS:
      return {
        ...state,
        characters: state.friends.map(friend => {
          if (friend.id !== action.payload) {
            return friend;
          }
        }),
        isloadingDELETE: false,
        successDELETE: true
      };
    case REMOVEFAILURE:
      return {
        ...state,
        isloadingDELETE: false,
        successDELETE: false
      };
    //LOGIN
    case LOGINFETCH:
      return {
        ...state,
        isloadingLOGIN: true,
        successLOGIN: false
      };
    case LOGINSUCCESS:
      return {
        ...state,
        isloadingLOGIN: false,
        successLOGIN: true,
        user: action.payload
      };
    case LOGINFAILURE:
      return {
        ...state,
        isloadingLOGIN: false,
        successLOGIN: false,
        user: ""
      };

    default:
      return state;
  }
};
