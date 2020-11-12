import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import userReducer from './UserState/userReducer';

const middleware = applyMiddleware(reduxLogger);

const rootReducer = combineReducers({
    userInfo: userReducer,
});

const store = createStore(rootReducer, middleware);

export default store;
