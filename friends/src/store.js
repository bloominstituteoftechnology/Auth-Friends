import friendsReducer from './reducers'
import { applyMiddleware, createStore, compose } from "redux";

const logger = store => next => action => {
    console.group("Redux Action");
    console.log("current state", store.getState());
    console.log("action", action);
    let result = next(action);
    console.log("new state", store.getState());
    console.groupEnd();
    return result;
};

// const thunk = store => next => action => {
//     if (typeof action === "function") {
//         if (!store.getState().chars.fetching) {
//         action(store.dispatch);
//         } else {
//             console.log("WHAT ARE YOU TRYING TO DO IM ALREADY FETCHING???");
//         }
//     } else {
//         return next(action);
//     }
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    friendsReducer,
    composeEnhancers(applyMiddleware(logger))
);

export default store;