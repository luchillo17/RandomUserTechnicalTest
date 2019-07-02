import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { usersReducer, UsersState } from './reducers';

export interface StoreState {
  users: UsersState;
}

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const reducers = combineReducers({
  users: usersReducer,
});

export const store = createStore(reducers, enhancer);
