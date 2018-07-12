import { GO_TO_ADD_FRIEND } from '../actions/actions';
import { GO_HOME } from '../actions/actions';

export default (state ='friendsList', action) => {
  switch (action.type) {
    case GO_TO_ADD_FRIEND:
      return 'addFriend';
    case GO_HOME:
      return 'friendList';
    default:
      return state;
  }
};

export const getPageContentState = (state) => state.pageContentState;