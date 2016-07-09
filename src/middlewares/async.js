// 'Next' means send this action to the next middleware, if no more middlware, send it to reducers
export default ({ dispatch }) => {
  return next => action => {
    // If action is not a promise, we don't care about it a nd send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // Mae sure promise resolves
    action.payload
      .then((response) => {
        // Craft new action with old type, but with new data as payload
        const newAction = {...action, payload: response};
        dispatch(newAction);
      });
  };
}