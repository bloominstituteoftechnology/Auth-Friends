/**
 * Renders element based on a Promise's current status
 *
 * @param {Object} state - component's local state with Promise status
 */

const matchAsyncState = state => match =>
  // prettier-ignore
  state.initial ? match.initial()
    : state.pending ? match.pending()
    : state.error   ? match.error(state.error)
    : state.data    ? match.data(state.data)
    : null;

export default matchAsyncState;
