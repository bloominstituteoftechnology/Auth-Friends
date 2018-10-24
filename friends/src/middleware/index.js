export const logger = store => next => action => {
  console.group(action.type);
  console.log('Action: ', action);
  console.log('prevState: ', store.getState());
  const result = next(action);
  console.log('newState: ', action);
  return result;
};
